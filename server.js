const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

require("dotenv").config();
const db = require("./db/connection");

// connecting to the server Use environment variables for security
db.connect((err) => {
  if (err) throw err;
  console.log("Welcome to the Employee Tracker Application");
  afterConnection();
});

// Establishing the connection and displaying Employee Manager note
const afterConnection = () => {
  console.log("***********************************");
  console.log("*                                 *");
  console.log("*        EMPLOYEE MANAGER         *");
  console.log("*                                 *");
  console.log("***********************************");
  menu();
};

// prompt for the list of the user options
const menu = function () {
  return inquirer
    .prompt([
      {
        // menu prompt
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ])
    .then((answers) => {
      const { options } = answers;

      if (options === "View all departments") {
        viewDepartments();
      }
      if (options === "View all roles") {
        viewRoles();
      }
      if (options === "View all employees") {
        viewEmployees();
      }
      if (options === "Add a department") {
        addDepartment();
      }
      if (options === "Add a role") {
        addRole();
      }
      if (options === "Add an employee") {
        addEmployee();
      }
      if (options === "Update an employee role") {
        updateEmployee();
      }
    });
};

// display all the departments
const viewDepartments = function () {
  console.log("----- All departments -----");
  const sql = "SELECT * FROM department";

  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    menu();
  });
};

// Display all roles
const viewRoles = function () {
  console.log("----- All Roles -----");
  const sql = "SELECT * FROM role";

  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    menu();
  });
};

// Display all employees
const viewEmployees = function () {
  console.log("----- All Employees -----");
  const sql = "SELECT * FROM employee";

  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    menu();
  });
};

// prompt for adding department
const addDepartment = function () {
  return inquirer
    .prompt([
      {
        // adding department
        type: "input",
        name: "addDept",
        message: "What department do you want to add?",
        validate: (addDept) => {
          if (addDept) {
            return true;
          } else {
            console.log("Please enter a department!");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      const sql = "INSERT INTO department (name) VALUES (?)";

      db.query(sql, answer.addDept, (err, result) => {
        if (err) throw err;
        console.log("Added to the department");

        viewDepartments();
      });
    });
};

// prompt for adding role
const addRole = function () {
  return inquirer
    .prompt([
      {
        // prompt for role name
        type: "input",
        name: "role",
        message: "What is the name of the role you want to add?",
        validate: (role) => {
          if (role) {
            return true;
          } else {
            console.log("Please enter a role!");
            return false;
          }
        },
      },
      {
        // prompt for role salary
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",
        validate: (salary) => {
          if (salary) {
            return true;
          } else {
            console.log("Please enter a salary!");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      const params = [answer.role, answer.salary];

      const rolesql = "SELECT name, id FROM department";

      db.query(rolesql, (err, data) => {
        if (err) throw err;

        const dept = data.map(({ name, id }) => ({ name: name, value: id }));
        inquirer
          .prompt([
            {
              type: "list",
              name: "dept",
              message: "What department the role belongs to?",
              choices: dept,
            },
          ])
          .then((deptChoice) => {
            const dept = deptChoice.dept;
            params.push(dept);

            const sql =
              "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";

            db.query(sql, params, (err, result) => {
              if (err) throw err;
              console.log("Added to the roles!");

              viewRoles();
            });
          });
      });
    });
};
