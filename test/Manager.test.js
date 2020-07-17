/*jshint esversion: 6 */
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

//Tests from develop library folder
test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  
  test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });
  


//Custom tests written by me
describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const obj = new Manager();
            expect("name" in obj).toEqual(true);
        });
        it("should return an object containing a 'id' property when called with the 'new' keyword", () => {
            const obj = new Manager();
            expect("id" in obj).toEqual(true);
        });
        it("should return an object containing a 'email' property when called with the 'new' keyword", () => {
            const obj = new Manager();
            expect("email" in obj).toEqual(true);
        });
        it("should return an object containing a 'officeNumber' property when called with the 'new' keyword", () => {
            const obj = new Manager();
            expect("officeNumber" in obj).toEqual(true);
        });
    });

    describe("returnManagerInfo", () => {
    // Positive Tests
        it("should return the Manager name", () => {
            const manager = new Manager();
            manager.name = "Manager John Doe";
            expect(manager.getName()).toEqual(manager.name);
        });
        it("should return the Manager ID", () => {
            const manager = new Manager();
            manager.id = 102;
            expect(manager.getId()).toEqual(manager.id);
        });
        it("should return the Manager email", () => {
            const manager = new Manager();
            manager.email = "Manager.John.Doe@email.com";
            expect(manager.getEmail()).toEqual(manager.email);
        });
        it("should return the Manager officeNumber", () => {
            const manager = new Manager();
            manager.officeNumber = "Manager.John.Doe@email.com";
            expect(manager.getEmail()).toEqual(manager.email);
        });
        it("should return the Manager role", () => {
            const manager = new Manager();
            expect(manager.getRole()).toEqual("Manager");
        });

    // Exception tests
        it("should throw an error if not provided an Manager name", () => {
            const manager = new Manager();
            //manager.name = "Manager John Doe";
            manager.id = 102;
            manager.email = "Manager.John.Doe@email.com";
            manager.officeNumber = 404;
            expect(typeof manager.getName()).toEqual("undefined");
        });
        it("should throw an error if not provided an Manager ID", () => {
            const manager = new Manager();
            manager.name = "Manager John Doe";
            //manager.id = 102;
            manager.email = "Manager.John.Doe@email.com";
            manager.officeNumber = 404;
            expect(typeof manager.getId()).toEqual("undefined");
        });
        it("should throw an error if not provided an Manager email", () => {
            const manager = new Manager();
            manager.name = "Manager John Doe";
            manager.id = 102;
            //manager.email = "Manager.John.Doe@email.com";
            manager.officeNumber = 404;
            expect(typeof manager.getEmail()).toEqual("undefined");
        });
        it("should throw an error if not provided an Manager officeNumber", () => {
            const manager = new Manager();
            manager.name = "Manager John Doe";
            manager.id = 102;
            manager.email = "Manager.John.Doe@email.com";
            //Manager.officeNumber = 404;
            expect(typeof manager.officeNumber).toEqual("undefined");
        });
    });

});

