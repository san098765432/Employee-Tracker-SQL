const fs = require('fs');
const inquirer = require('inquirer');




const questions = [
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'name',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a roll', 'Add an employee', 'Update an employee role'],
    },
    {
        type: 'input',
        message: 'What is the name of the new department?',
        name: 'Department name',
    },
    {
        type: 'input',
        message: 'What is the title of the new role?',
        name: 'Title of new role',
    },
    {
        type: 'input',
        message: 'What is the salary of the new role?',
        name: 'New role salary',
    },
    {
        type: 'input',
        message: 'Which department is the new role part of?',
        name: 'New department for role',
    },
    {
        type: 'input',
        message: 'What is the employees first name?',
        name: 'First name',
    },
    {
        type: 'input',
        message: 'What is the employees  surname?',
        name: 'Surname',
    },
    {
        type: 'input',
        message: 'What is the employees role?',
        name: 'New employees role',
    },
    {
        type: 'input',
        message: 'What is the name of the employees manager?',
        name: 'Name of manager',
    },
  ];
  


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
  
  start();