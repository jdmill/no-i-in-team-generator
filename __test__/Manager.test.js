const Manager = require("../lib/Manager.js");

describe("Testing of Manager class", () => {
  describe("Init of Manager Class", () => {
    it("Should assign a number id", () => {
      expect(new Manager(1, "John Doe", "test@email.com").id).toBe(1);
    });
    it("Should assign a name", () => {
      expect(new Manager(1, "John Doe", "test@email.com").name).toBe("John Doe");
    });
    it("Should assign an email", () => {
      expect(new Manager(1, "John Doe", "test@email.com").email).toBe(
        "test@email.com"
      );
    });

    it("getRole Function Should return the Manager Role", () => {
      const testRole = "Manager";
      const testUser = new Manager(1, "John Doe", "test@email.com");
      expect(testUser.getRole()).toBe(testRole);
    });
  });
});
