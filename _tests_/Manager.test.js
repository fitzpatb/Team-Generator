const Manager = require('../lib/Manager');

test("Correct office umber", () => {
  const office = "15";
  const temp = new Manager("Bob", 1, "cool@gmail.com", office);
  expect(temp.office).toBe(office);
});

test("getRole() works for Manager", () => {
  const role = "Manager";
  const temp = new Manager("Bob", 1, "cool@gmail.com", 15);
  expect(temp.getRole()).toBe(role);
});

