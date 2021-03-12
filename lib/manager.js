const Employee = require('./employee.js');

class Manager extends Employee {
  constructor(name, email, id, officeNumber) {
    super(name, email, id);
    this.officeNumber = officeNumber;
    this.title = "Manager";
  }
  getRole() {
    return this.title
  }
}

module.exports = Manager;