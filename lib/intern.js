/*jshint esversion: 6 */
const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
