const fs = require('fs');
const inquirer = require('inquirer');
const db = require('./config/connection')
require ('console.table')



function mainMenu () {
  inquirer
.prompt([
  { type: 'list',
  message: 'What would you like to do?',
  name: 'option',
  choices: ['View all departments', 'view all roles', 'View all employees', 'Update an employee role', 'Add a department', 'Add a roll', 'Add an employee', 'Quit'], 
 }
]).then((answers) => {
switch(answers.option){
 case 'View all departments': 
 viewAllDepartments()
 break;

 case 'view all roles':
 viewAllRoles()
 break;

 case 'View all employees':
  viewAllEmployees()
  break;

  case 'Add a department': 
  addADepartment()
  break;

  case  'Add a roll':
  addARoll()
  break;
          
  case  'Add an employee':
  addAnEmployee()
  break;

  case 'Update an employee role':
  updateEmployeeRole()
  break;  


}
})
} 
mainMenu()



function viewAllDepartments (){
db.query(
  'SELECT * FROM `department`',
  (err, results) => {
    if (err) {
      console.log(err)
    }
    console.table(results); 
    mainMenu();
  }
)};


function viewAllRoles (){
  db.query(
    'SELECT * FROM `role`',
    (err, results) =>{
      if(err) throw err
      console.table(results); 
      mainMenu();
    }
  )};


  function viewAllEmployees(){
    db.query(
      'SELECT * FROM `employee`',
      (err, results) =>{
        if(err) throw err
        console.table(results); 
        mainMenu();
      }
    )};


  
    function addADepartment() {
     inquirer.prompt([
        {
          type: 'input',
          message: 'What is the name of the new department you would like to add?',
          name: 'adding',
     
        }
      ]).then(function(answer){
        db.query(
          "INSERT INTO department (name) VALUES (?)",
          [answer.adding],
          (err, results) =>{
            if(err) throw err
          console.log("New department added"); 
          
              mainMenu();
            }
            )
         })};


    

         function addARoll() {
              db.query(
                'SELECT * FROM `department`', (err,res)=>{
                  if(err) throw (err)
                
             let departmentChoices= res.map ( (result)=>{
                  console.log (result)
                  return {
                    name: result.name,
                    value: result.id
                  }
                })
                console.log (departmentChoices)

                inquirer.prompt([
                  {
                    type: "input",
                    name: "roleName",
                    message: "What is the name of the new role you would like to add?",
                  },
                  {
                    type: "input",
                    name: "salary",
                    message: "What is the salary for this position?",
                  },
                  {
                    type: "list",
                    name: "departmentId",
                    message: "Which department does the role belong to?",
                    choices: departmentChoices
                   
                  },
                ]).then((answers) => {
                 
                  db.query(
                    "INSERT INTO role SET ?",
                    {title:answers.roleName, salary:answers.salary, department_id:parseInt(answers.departmentId)},
                    (err, res) => {
                      if (err) throw err;
                      console.log("The new role and information has been successfully to the database");
                      mainMenu()
                    }
                  );
                });

              })
            
            }







          function addAnEmployee () {
            db.promise().query(
              'SELECT * FROM `role`'
            ).then ((role)=>{
            let roleSelection= role.map ((result)=>{
                return {
                  name: result.title,
                  value: result.id
                }
              })
              

          inquirer.prompt([
             {
               type: 'input',
               message: 'What is the name of the first name of the employee you would like to add?',
               name: 'firstName',
          
             },
             {
              type: 'input',
              message: 'What is the name of the surname of the employee you would like to add?',
              name: 'surname',
         
            },
            {
              type: 'list',
              message: 'What is the role id of the employee you would like to add?',
              name: 'roleChoice',
              choices: roleSelection
         
            },

          ]).then(( answers ) => {
            db.query('insert into employee SET ?', {
              first_name: answers.firstName, 
              last_name: answers.surname,
              role_id: answers.roleChoice
            }, (err,res) => {
              if (err) throw err;
              console.log ('The employee has been successfully added to the database')
              mainMenu()
            } )
          })
          
        })
        } 


  function  updateEmployeeRole(){
   db.query('SELECT * FROM employee',
   function (err, results){
      if(err) throw err;
      inquirer.prompt([
        {
          name:'choice',
          type:'rawlist',
          choices:function(){
            let choiceArr = [];
            for(i=0; i< results.length; i++)
            {
              choiceArr.push(results[i].last_name);
            }
            return choiceArr;
          },
          message: 'Select the employee you would like to update'
        }
      ])
      .then(function(answers){
        const saveName = answers.choice;

        db.query('SELECT * FROM employee',
        function(err, results){
          if(err) throw err;
          inquirer.prompt([
              {
                  name: 'role',
                  type: 'rawlist',
                  choices: function(){
                    var choiceArr = [];
                    for(i=0; i< results.length; i++){
                      choiceArr.push(results[i].role_id)
                    }
                    return choiceArr;
                  },
                  message: 'Select the employee you would like to update'
              },
              {
                  name:'manager',
                  type: 'number',
                  validate: function(value){
                    if(isNaN(value) === false){
                      return true;
                    }
                    return false;
                  },
                  message: 'Please enter the new manager ID',
                  default: '1'
              }
             ]).then(function(answers){
              console.log(answers);
              console.log(saveName);
              db.query('UPDATE employee SET ? WHERE last_name = ?',
              [
                {
                  role_id: answers.role,
                  manager_id: answer.manager
                }, saveName
              ],

              ),

              console.log('.........................');
              console.log('Employee has now been updated');
              console.log('.........................');
              mainMenu;

             });
        })
      })
    })
  }
          
      
      

          
          
          
         



      
 

        

         
         




























const inquirerAsync = async (questions) => {
  try {
    const answers = await inquirer.prompt(questions);
    return answers;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(0);
  }
};

const writeToFile = (path, data, options = 'utf8') => {
  try {
    fs.writeFileSync(path, data, options);
    console.log(`Successfully written to ${path}!`);
  } catch (error) {
    console.log(`Failed to write to ${path}: ${error.message}`);
  }
};

const start = async () => {
  const answers = await inquirerAsync(questions);

  writeToFile('output.json', JSON.stringify(answers));
};
