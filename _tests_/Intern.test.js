const Intern = require('../lib/Intern');

test("Correct school", () => {
  const school = "Purdue";
  const temp = new Intern("Bob", 1, "cool@gmail.com", school);
  expect(temp.office).toBe(office);
});

test("getRole() works for Intern", () => {
  const role = "Intern";
  const temp = new Intern("Bob", 1, "cool@gmail.com", "Purdue");
  expect(temp.getRole()).toBe(role);
});

test("getSchool() works for Intern", () => {
  const school = "Intern";
  const temp = new Intern("Bob", 1, "cool@gmail.com", school);
  expect(temp.getRole()).toBe(school);
});