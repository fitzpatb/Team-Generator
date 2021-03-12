//required packages
const inquirer = require("inquirer");
//const jest = require("jest");

//required js files
const Manager = require("./lib/manager.js");
//const Engineer = require("./lib/engineer.js");
//const Intern = require("./lib/intern.js");

//function getManager(){
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager's ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is the office number?",
        name: "office"
      }
    ])
    .then((response) => {
      const boss = new Manager(response.name, response.email, response.id, response.office);
      console.log(boss);
    });

//}
