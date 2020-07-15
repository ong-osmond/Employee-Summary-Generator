const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const obj = new Intern();
            expect("name" in obj).toEqual(true);
        });
        it("should return an object containing a 'id' property when called with the 'new' keyword", () => {
            const obj = new Intern();
            expect("id" in obj).toEqual(true);
        });
        it("should return an object containing a 'email' property when called with the 'new' keyword", () => {
            const obj = new Intern();
            expect("email" in obj).toEqual(true);
        });
        it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
            const obj = new Intern();
            expect("school" in obj).toEqual(true);
        });
    });

    describe("returnInternInfo", () => {
    //     // Positive Tests
        it("should return the intern name", () => {
            const intern = new Intern();
            intern.name = "Intern John Doe";
            expect(intern.getName()).toEqual(intern.name);
        });
        it("should return the intern ID", () => {
            const intern = new Intern();
            intern.id = 104;
            expect(intern.getId()).toEqual(intern.id);
        });
        it("should return the intern email", () => {
            const intern = new Intern();
            intern.email = "Intern.John.Doe@email.com";
            expect(intern.getEmail()).toEqual(intern.email);
        });
        it("should return the intern School", () => {
            const intern = new Intern();
            intern.school = "john-doe-school";
            expect(intern.getSchool()).toEqual(intern.school);
        });
        it("should return the intern role", () => {
            const intern = new Intern();
            expect(intern.getRole()).toEqual("Intern");
        });

        // Exception tests
        it("should throw an error if not provided an intern name", () => {
            const intern = new Intern();
            //intern.name = "Intern John Doe";
            intern.id = 104;
            intern.email = "Intern.John.Doe@email.com";
            intern.school = "john-doe-school";
            expect(typeof intern.getName()).toEqual("undefined");
        });
        it("should throw an error if not provided an intern ID", () => {
            const intern = new Intern();
            intern.name = "Intern John Doe";
            //intern.id = 104;
            intern.email = "Intern.John.Doe@email.com";
            intern.school = "john-doe-school";
            expect(typeof intern.getId()).toEqual("undefined");
        });
        it("should throw an error if not provided an intern email", () => {
            const intern = new Intern();
            intern.name = "Intern John Doe";
            intern.id = 104;
            //intern.email = "Intern.John.Doe@email.com";
            intern.school = "john-doe-school";
            expect(typeof intern.getEmail()).toEqual("undefined");
        });
        it("should throw an error if not provided an intern School", () => {
            const intern = new Intern();
            intern.name = "Intern John Doe";
            intern.id = 104;
            intern.email = "Intern.John.Doe@email.com";
            //intern.school = "john-doe-school";
            expect(typeof intern.getSchool()).toEqual("undefined");
        });
    });

});

