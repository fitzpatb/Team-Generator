const Employee = require('../lib/Employee');

test("Constructs an employee object",() => {
  const temp = new Employee();
  expect(typeof(temp)).toBe('object');
});

test("Correct name", () => {
  const name = "Bob";
  const temp = new Employee(name);
  expect(temp.name).toBe(name);
});

test("Correct id", () => {
  const id = "15";
  const temp = new Employee("Bob", id);
  expect(temp.id).toBe(id);
});

test("Correct email", () => {
  const email = "cool@gmail.com";
  const temp = new Employee("Bob", 1, email);
  expect(temp.email).toBe(email);
});

test("getName() works", () => {
  const name = "Bob";
  const temp = new Employee(name);
  expect(temp.getName()).toBe(name);
});

test("getId() works", () => {
  const id = "15";
  const temp = new Employee("Bob", id);
  expect(temp.getId()).toBe(id);
});

test("getEmail() works", () => {
  const email = "cool@gmail.com";
  const temp = new Employee("Bob", 1, email);
  expect(temp.getEmial()).toBe(email);
});

test("getRole() works", () => {
  const role = "Employee";
  const temp = new Employee("Bob", 1, "cool@gmail.com");
  expect(temp.getRole()).toBe(role);
});

