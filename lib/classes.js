class Employee {
    constructor(name, ID, email){
    this.name = name;
    this.id = ID;
    this.email = email
    }
}

class Mangers extends Employee{
    constructor(name, ID, email, officeNumber) {
        super(name, ID, email);
        this.officeNumber = officeNumber;
    }
}

class Engineer extends Employee{
    constructor(name, ID, email, github) {
        super(name, ID, email);
        this.github = github;
    }
}

class Intern extends Employee{
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.school = school;
    }
}

module.exports = {
    managers: Mangers,
    intern: Intern,
    engineer: Engineer
}