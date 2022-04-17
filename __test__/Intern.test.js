const Intern = require("../lib/Intern.js");

describe("Testing of Intern class", () => {
  describe("Init of Intern Class", () => {
    it("Should assign a number id", () => {
      expect(new Intern(1, "John Doe", "test@email.com").id).toBe(1);
    });
    it("Should assign a name", () => {
      expect(new Intern(1, "John Doe", "test@email.com").name).toBe(
        "John Doe"
      );
    });
    it("Should assign an email", () => {
      expect(new Intern(1, "John Doe", "test@email.com").email).toBe(
        "test@email.com"
      );
    });

    it("getRole Function Should return the Intern Role", () => {
      const testRole = "Intern";
      const testUser = new Intern(1, "John Doe", "test@email.com");
      expect(testUser.getRole()).toBe(testRole);
    });
  });
});
