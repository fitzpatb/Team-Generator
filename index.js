//required packages
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

//required js files
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

let team = [];

function init() {
  makeHtml();
  generateTeam();

}

function generateTeam() {
  getManager();

}


function getManager(){
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "manager",
      },
      {
        type: "input",
        message: "What is the manager's ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the office number?",
        name: "office"
      }
    ])
    .then((response) => {
      let boss = new Manager(response.manager, response.id, response.email, response.office);
      team.push(boss);
      makeManager(boss);
    });
};

function generateMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Is team member an Engineer or Intern",
        name: "role",
        choices: ["Engineer", "Intern"]
      }
    ])
    .then((response) => {
      if (response.role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is their name?"
            },
            {
              type: "input",
              name: "id",
              message: "What is their ID number?"
            },
            {
              type: "input",
              name: "email",
              message: "What is their email?"
            },
            {
              type: "input",
              name: "github",
              message: "What is their github?"
            }
          ])
          .then((response) => {
            let engineer = new Engineer(response.name, response.id, response.email, response.github);
            team.push(engineer);
            makeEngineer(engineer);
          })
      } else {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is their name?"
            },
            {
              type: "input",
              name: "email",
              message: "What is their email?"
            },
            {
              type: "input",
              name: "id",
              message: "What is their ID number?"
            },
            {
              type: "input",
              name: "school",
              message: "What University are you attending?"
            }
          ])
          .then((response) => {
            let intern = new Intern(response.name, response.id, response.email, response.school);
            team.push(intern);
            makeIntern(intern);
          })
      }

    })
}


function makeHtml() {
  const header = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <title>Awesome Team Generator</title>
  </head>
  <body>
    <div class="jumbotron">
      <h1>Your Team!</h1>
    </div>
    <div class="card-container">
      <div class="row">
        `;

  fs.writeFile("./dist/generated.html", header, function(err){
    if (err) {
      console.log("cant write file");
    } else {
      console.log("success");
    }
  });
};

function makeManager(boss) {
  let name = boss.getName();
  let title = boss.getRole();
  let id = boss.getId();
  let email = boss.getEmial();
  let office = boss.officeNumber
  const manager = `<div class="col-3">
          <div class="card" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item"><a href = "mailto: ${email}">Email Address: ${email}</a></li>
              <li class="list-group-item">Office Phone: ${office}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class= "row">
        <div class="col-10">
        `;

  fs.appendFile("./dist/generated.html", manager, function(err) {
    if (err) {
      console.log("cant add manager");
    } else {
      console.log("adding manager");
    }
  });
  generateMember();
}

function makeEngineer(engineer) {
  let name = engineer.getName();
  let title = engineer.getRole();
  let id = engineer.getId();
  let email = engineer.getEmial();
  let github = engineer.getGithub()
  const member = `  <div class="card" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />${title}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item"><a href = "mailto: ${email}">Email Address: ${email}</a></li>
              <li class="list-group-item"><a href="https://github.com/${github}/">Github: ${github}</a></li>
            </ul>
          </div>
        `;

  fs.appendFile("./dist/generated.html", member, function(err) {
    if (err) {
      console.log("cant add member");
    } else {
      console.log("adding member");
    }
  });
  inquirer
    .prompt([
      {
        type: "list",
        name: "team",
        message: "Add more members?",
        choices: ["yes", "no"]
      }
    ])
    .then((response) => {
      if (response.team === "yes") {
        generateMember();
      } else {
        closeTags();
      }
    })
}

function makeIntern(intern) {
  let name = intern.getName();
  let title = intern.getRole();
  let id = intern.getId();
  let email = intern.getEmial();
  let school = intern.getSchool();
  const member = `  <div class="card" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />${title}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item"><a href = "mailto: ${email}">Email Address: ${email}</a></li>
              <li class="list-group-item">School: ${school}</li>
            </ul>
          </div>
        `;

  fs.appendFile("./dist/generated.html", member, function(err) {
    if (err) {
      console.log("cant add member");
    } else {
      console.log("adding member");
    }
  });
  inquirer
    .prompt([
      {
        type: "list",
        name: "team",
        message: "Add more members?",
        choices: ["yes", "no"]
      }
    ])
    .then((response) => {
      if (response.team === "yes") {
        generateMember();
      } else {
        closeTags();
      }
    })
}

function closeTags() {
  const end = `</div>
    </div>
  </body>
  </html>`;

  fs.appendFile("./dist/generated.html", end, function(err) {
    if (err) {
      console.log("cant end");
    } else {
      console.log("ended");
    }
  })
}

init();