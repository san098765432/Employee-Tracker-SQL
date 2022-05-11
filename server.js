const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


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


