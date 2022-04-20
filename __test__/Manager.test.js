const Manager = require("../lib/Manager.js");

describe("Testing of Manager class", () => {
  describe("Init of Manager Class", () => {
    it("Should assign a number id", () => {
      expect(new Manager("John Doe", 1, "test@email.com", 123).id).toBe(1);
    });
    it("Should assign a name", () => {
      expect(new Manager("John Doe", 1, "test@email.com", 123).name).toBe(
        "John Doe"
      );
    });
    it("Should assign an email", () => {
      expect(new Manager("John Doe", 1, "test@email.com", 123).email).toBe(
        "test@email.com"
      );
    });

    it("getRole Function Should return the Manager Role", () => {
      const testRole = "Manager";
      const testManager = new Manager("John Doe", 1, "test@email.com", 123);
      expect(testManager.getRole()).toBe(testRole);
    });

    it("getOfficeNumber should return the office Number", () => {
      const testNumber = 123;
      const testManager = new Manager(1, "John Doe", "test@email.com", 123);
      expect(testManager.getOfficeNumber()).toBe(testNumber);
    })
  });
});
