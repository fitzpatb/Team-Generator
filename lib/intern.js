const Employee = require('./employee.js');

class Intern extends Employee {
  constructor(name, email, id, school) {
    super(name, email, id);
    this.school = school;
    this.title = "Intern";
  }
  getRole() {
    return this.title;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;