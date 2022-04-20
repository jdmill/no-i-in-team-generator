const Engineer = require("../lib/Engineer.js");

describe("Testing of Engineer class", () => {
  describe("Init of Engineer Class", () => {
    it("Should assign a number id", () => {
      expect(new Engineer("John Doe", 1, "test@email.com").id).toBe(1);
    });
    it("Should assign a name", () => {
      expect(new Engineer("John Doe", 1, "test@email.com").name).toBe(
        "John Doe"
      );
    });
    it("Should assign an email", () => {
      expect(new Engineer("John Doe", 1, "test@email.com").email).toBe(
        "test@email.com"
      );
    });

    it("getRole Function Should return the Engineer Role", () => {
      const testRole = "Engineer";
      const testEngineer = new Engineer("John Doe", 1, "test@email.com");
      expect(testEngineer.getRole()).toBe(testRole);
    });

    it("getGitHub function should return test gitHub var", () => {
      const testGitHub = "testGitHub";
      const testEngineer = new Engineer(
        "John Doe",
        1,
        "test@email.com",
        testGitHub
      );

      expect(testEngineer.getGithub()).toBe(testGitHub);
    });
  });
});
