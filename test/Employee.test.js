const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const obj = new Employee();
            expect("name" in obj).toEqual(true);
        });
        it("should return an object containing a 'id' property when called with the 'new' keyword", () => {
            const obj = new Employee();
            expect("id" in obj).toEqual(true);
        });
        it("should return an object containing a 'email' property when called with the 'new' keyword", () => {
            const obj = new Employee();
            expect("email" in obj).toEqual(true);
        });

    });

    describe("returnEmployeeInfo", () => {
        // Positive Tests
        it("should return the employee name", () => {
            const employee = new Employee();
            employee.name = "John Doe";
            expect(employee.getName()).toEqual(employee.name);
        });
        it("should return the employee ID", () => {
            const employee = new Employee();
            employee.id = 101;
            expect(employee.getId()).toEqual(employee.id);
        });
        it("should return the employee email", () => {
            const employee = new Employee();
            employee.email = "John.Doe@email.com";
            expect(employee.getEmail()).toEqual(employee.email);
        });
        it("should return the employee role", () => {
            const employee = new Employee();
            expect(employee.getRole()).toEqual("Employee");
        });

        // Exception tests
        it("should throw an error if not provided an employee name", () => {
            const employee = new Employee();
            //employee.name = "John Doe";
            employee.id = 101;
            employee.email = "John.Doe@email.com";
            expect(typeof employee.getName()).toEqual("undefined");
        });
        it("should throw an error if not provided an employee ID", () => {
            const employee = new Employee();
            employee.name = "John Doe";
            //employee.id = 101;
            employee.email = "John.Doe@email.com";
            expect(typeof employee.getId()).toEqual("undefined");
        });
        it("should throw an error if not provided an employee email", () => {
            const employee = new Employee();
            employee.name = "John Doe";
            employee.id = 101;
            //employee.email = "John.Doe@email.com";
            expect(typeof employee.getEmail()).toEqual("undefined");
        });

    });

});
