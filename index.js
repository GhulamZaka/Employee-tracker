const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql2");

require("dotenv").config();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//////////////////////////////////////////
// // Use environment variables for security
const database = "????"; // Database name
const dbConn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: database,
};
// Connect to database
const db = mysql.createConnection(dbConn);
console.log("Connected to the election database.");

//////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
