const Employee = require('./employee.js');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.title = "Intern"
  }
  getRole() {
    return this.title;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;