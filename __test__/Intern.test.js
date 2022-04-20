const Intern = require("../lib/Intern.js");

describe("Testing of Intern class", () => {
  describe("Init of Intern Class", () => {
    it("Should assign a number id", () => {
      expect(new Intern("John Doe", 1, "test@email.com", "testSchool").id).toBe(
        1
      );
    });
    it("Should assign a name", () => {
      expect(
        new Intern("John Doe", 1, "test@email.com", "testSchool").name
      ).toBe("John Doe");
    });
    it("Should assign an email", () => {
      expect(
        new Intern("John Doe", 1, "test@email.com", "testSchool").email
      ).toBe("test@email.com");
    });

    it("getRole Function Should return the Intern Role", () => {
      const testRole = "Intern";
      const testIntern = new Intern(
        "John Doe",
        1,
        "test@email.com",
        "testSchool"
      );
      expect(testIntern.getRole()).toBe(testRole);
    });

    it("getSchool function should return the school var", () => {
      const testSchool = "testSchool";
      const testIntern = new Intern(
        "John Doe",
        1,
        "test@email.com",
        "testSchool"
      );
      expect(testIntern.getSchool()).toBe(testSchool);
    })
  });
});
