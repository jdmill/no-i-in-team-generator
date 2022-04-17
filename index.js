//imports Classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//imports inquirer and fs packages
const inquirer = require("inquirer");
const fs = require("fs");

//creates an empty array for team members
const teamProfiles = [];

createManager();

//creates manager object
function createManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter Manager Name"
    },
    {
      type: "number",
      name: "id",
      message: "Enter Manager's ID number"
    },
    {
      type: "input",
      name: "email",
      message: "Enter Manager's email address"
    },
    {
      type: "number",
      name: "officeNumber",
      message: "Enter Manager's Office Number"
    }
  ])
    .then(answers => {
      //creates a manager object using inquirer answers
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      //pushes manager obj to the teamProfiles array
      teamProfiles.push(manager);
      //calls the addTeamMember Function - checks to see if another team member should be added
      addTeamMember();
    })
}

//creates a new Employee
function createEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "empName",
      message: "Enter Employee's Name"
    },
    {
      type: "number",
      name: "empId",
      message: "Enter Employee's ID number"
    },
    {
      type: 'input',
      name: 'empEmail',
      message: "Enter Employee's Email address"
    },
    {
      type: "list",
      name: "empType",
      message: "Select Employee Type",
      choices: ["Engineer", "Intern"]
    },
    {
      type: "input",
      name: "empGithub",
      message: "Enter Engineer's Github URL",
      when:(answers) => answers.empType === "Engineer"
    },
    {
      type: "list",
      name: "empSchool",
      message: "Enter Intern's School",
      when:(answers) => answers.empType === "Intern"
    }
  ])
    .then(answers => {
      console.log(answers)
    })
}

//assembles team 
function createTeam() {

}

//checks to see if new team member should be added.
function addTeamMember() {
  inquirer.prompt([
    {
      type: "confirm",
      name: "newBoo",
      message: "Would you like to add a Team Member?",
      default: false
    }
  ])
    .then(answer => {
      switch (answer.newBoo) {
        case true:
          createEmployee();
          break;
        case false:
          createTeam();
          break;
      }
    })
}