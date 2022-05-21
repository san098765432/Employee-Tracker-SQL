// Imported mysql2, which can be found as dependencies in package.json

const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    
    user: 'root',
   
    password: 'password',
    database: 'employeedata_db'
  },
  console.log(`Connected to the employeedata_db.`)
);


db.connect((err) => {
  if (err) throw err;
  })


module.exports = db

