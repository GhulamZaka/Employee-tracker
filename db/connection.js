const mysql = require("mysql2");

//  Use environment variables for security
const database = "company_records";
const dbConn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: database,
};
// Connect to database
const db = mysql.createConnection(dbConn);
console.log("Connected to the company_records database.");

module.exports = db;
