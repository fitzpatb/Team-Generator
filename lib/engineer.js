const Employee = require('./employee.js');

class Engineer extends Employee {
  constructor(name, email, id, github) {
    super(name, email, id);
    this.github = github;
    this.title = "Engineer";
  }
  getRole() {
    return this.title;
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;