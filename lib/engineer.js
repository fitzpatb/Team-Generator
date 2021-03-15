const Employee = require('./employee.js');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.title = "Engineer"
  }
  getRole() {
    return this.title
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;