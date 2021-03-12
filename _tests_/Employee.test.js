const Employee = require('../lib/Employee');

test("Constructs an employee object",() => {
  const temp = new Employee();
  expect(typeof(temp)).toBe('object');
})