//imports Classes
const genHTML = require("./dist/genHTML")
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
      name: "name",
      message: "Enter Employee's Name"
    },
    {
      type: "number",
      name: "id",
      message: "Enter Employee's ID number"
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter Employee's Email address"
    },
    {
      type: "list",
      name: "type",
      message: "Select Employee Type",
      choices: ["Engineer", "Intern"]
    },
    {
      type: "input",
      name: "github",
      message: "Enter Engineer's Github username",
      when:(answers) => answers.type === "Engineer",
    },
    {
      type: "input",
      name: "school",
      message: "Enter Intern's School",
      when:(answers) => answers.type === "Intern",
    }
  ])
    .then(answers => {
      console.log(answers.github);
      console.log(answers.school);
      switch (answers.type) {
        case ("Engineer"):
          const engineer = new Engineer(answers.name,answers.id,answers.email,answers.github);
          teamProfiles.push(engineer);
          addTeamMember();
          break;
        
        case ("Intern"):
          const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
          );
          teamProfiles.push(intern);
          addTeamMember();
          break;
      }
    })
}

//assembles team 
function createTeam() {
  fs.writeFileSync('./dist/team.html', genHTML(teamProfiles));
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