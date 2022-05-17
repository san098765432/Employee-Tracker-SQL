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
  choices: ['View all departments', 'view all roles', 'View all employees', 'Update an employee role', 'Quit'], 
 }
])
.then(answers => {
switch(answers.option){
 case 'View all departments': 
 viewAllDepartments()
 break;

 case 'view all roles':
 viewAllRoles()
 break;

 case 'view all employees':
  viewAllEmployees()
  break;

  case 'Update an employee role':
  updateEmployeeRole()
  break;  

default:
  db.end()
}
});
}

mainMenu()



function viewAllDepartments (){
db.query(
  'SELECT * FROM `department`',
  function(err, results) {
    console.log(results); 
    mainMenu();
  }
)};


function viewAllRoles (){
  db.query(
    'SELECT * FROM `role`',
    function(err, results, fields) {
      console.log(results); 
      mainMenu();
    }
  )};

  function viewAllEmployees(){
    db.query(
      'SELECT * FROM `employee`',
      function(err, results, fields) {
        console.log(results); 
        mainMenu();
      }
    )};

    function  updateEmployeeRole(){
      db.query(
        'SELECT * FROM `employee`',
        function(err, results, fields) {
          console.log(results); 
          mainMenu();
        }
      )};




  

    function addingMenu () {
      inquirer
    .prompt([
      {
        type: 'input',
        message: 'What would you like to do?',
        choices:[ 'Add a department', 'Add a roll', 'Add an employee'],
      },
    ])
    .then(answers => {
      switch(answers.option){
       case 'Add a department': 
       addADepartment()
       break;

        case  'Add a roll':
        addARoll()
        break;
          
        case  'Add an employee':
        addAnEmployee()
        break;
      }
    });
    }

   



          
    function addADepartment() {
      db.query(
        'SELECT * FROM `department`',
        function(err, results, fields) {
          console.log(results); 
          mainMenu();
        }
      )};

  
      function addARoll() {
        db.query(
          'SELECT * FROM `role`',
          function(err, results, fields) {
            console.log(results); 
            mainMenu();
          }
        )};
    

        function addAnEmployee() {
          db.query(
            'SELECT * FROM `employee`',
            function(err, results, fields) {
              console.log(results); 
              mainMenu();
            }
          )};
    

         
         




























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
