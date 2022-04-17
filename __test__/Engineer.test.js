const Engineer = require("../lib/Engineer.js");

describe("Testing of Engineer class", () => {
  describe("Init of Engineer Class", () => {
    it("Should assign a number id", () => {
      expect(new Engineer(1, "John Doe", "test@email.com").id).toBe(1);
    });
    it("Should assign a name", () => {
      expect(new Engineer(1, "John Doe", "test@email.com").name).toBe(
        "John Doe"
      );
    });
    it("Should assign an email", () => {
      expect(new Engineer(1, "John Doe", "test@email.com").email).toBe(
        "test@email.com"
      );
    });

    it("getRole Function Should return the Engineer Role", () => {
      const testRole = "Engineer";
      const testUser = new Engineer(1, "John Doe", "test@email.com");
      expect(testUser.getRole()).toBe(testRole);
    });
  });
});
