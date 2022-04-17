const Employee = require('../lib/Employee.js');

describe("Testing of Employee class", () => {
  describe("Init of Employee Class", () => {
    it("Should assign a number id", () => {
      expect(new Employee(1, "John Doe", "test@email.com").id).toBe(1);
    });
    it("Should assign a name", () => {
      expect(new Employee(1, "John Doe", "test@email.com").name).toBe(
        "John Doe"
      );
    });
    it("Should assign an email", () => {
      expect(new Employee(1, "John Doe", "test@email.com").email).toBe("test@email.com");
    });

    it("getRole Function Should return the Employee Role", () => {
      const testRole = "Employee";
      const testUser = new Employee(1, "John Doe", "test@email.com");
      expect(testUser.getRole()).toBe(testRole);
    });
  });
})