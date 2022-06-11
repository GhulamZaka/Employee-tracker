const inquirer = require("inquirer");
const express = require("express");
const mysql = require("mysql2");

//const PORT = process.env.PORT || 3001;
const app = express();

//const cTable = require("console.table");

const menu = function () {
  return inquirer.prompt([
    {
      // menu prompt
      type: "list",
      message: "What would you like to do?",
      name: "options",
      choices: [
        "View all departments",
        "View all roles",
        "View all emloyees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ]);
};

const department = function () {
  return inquirer.prompt([
    {
      // prompts for department name
      type: "text",
      name: "department",
      message: "What is the name of the department?",
    },
  ]);
};

const role = function () {
  return inquirer.prompt([
    {
      // prompt for choosing role
      type: "text",
      name: "role-name",
      message: "What is the name of the role?",
    },
    {
      // prompt for the role salary
      type: "text",
      name: "role-salary",
      message: "What is the salary of the role?",
    },
    {
      // prompt for the role department
      type: "text",
      name: "role-department",
      message: "Which department does the role belong to?",
    },
  ]);
};

const employee = function () {
  return inquirer.prompt([
    {
      // prompt for adding employee
      type: "text",
      name: "employee-firstName",
      message: "What is the employee's first name?",
    },
    {
      // prompt for adding employee
      type: "text",
      name: "employee-lastName",
      message: "What is the employee's last name?",
    },
    {
      // prompt for adding employee
      type: "text",
      name: "employee-role",
      message: "What is the employee's role?",
    },
    {
      // prompt for adding employee
      type: "text",
      name: "employee-manager",
      message: "Who is the employee's manager?",
    },
  ]);
};

menu().then(department).then(role).then(employee);
