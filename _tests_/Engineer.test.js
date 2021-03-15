const Engineer = require('../lib/Engineer');

test("Correct github", () => {
  const github = "coolgit";
  const temp = new Engineer("Bob", 1, "cool@gmail.com", github);
  expect(temp.github).toBe(github);
});

test("getRole() works for Engineer", () => {
  const role = "Engineer";
  const temp = new Engineer("Bob", 1, "cool@gmail.com", "coolgit");
  expect(temp.getRole()).toBe(role);
});

test("getGithub() works for Engineer", () => {
  const github = "Engineer";
  const temp = new Engineer("Bob", 1, "cool@gmail.com", github);
  expect(temp.getGithub()).toBe(github);
});