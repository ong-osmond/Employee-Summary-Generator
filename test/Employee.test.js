const Employee = require("../lib/employee");

//Tests from develop library folder
test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });
  
  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
  });
  
  test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
  });
  
  test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
  test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });
  

//Custom tests written by me
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
