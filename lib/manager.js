const Employee = require('./employee.js');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.title = "Manager"
  }
  getRole() {
    return this.title;
  }
}

module.exports = Manager;