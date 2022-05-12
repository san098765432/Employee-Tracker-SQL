// Imported inquirer and mysql2, which can be found as dependencies in package.json
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Setting up the PORT connection and calling inquirer as a function
const PORT = process.env.PORT || 3001;
const app = inquirer();


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    
    user: 'root',
   
    password: '',
    database: 'employeedata_db'
  },
  console.log(`Connected to the employeedata_db.`)
);


