class Engineer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getRole() {
    return "Engineer";
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

module.exports = Engineer;
