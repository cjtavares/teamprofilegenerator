const Employee = require("./employee");

class Managers extends Employee{
    constructor(name, ID, email, officeNumber) {
        super(name, ID, email);
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }
    
}