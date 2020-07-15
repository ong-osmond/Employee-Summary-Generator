const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const obj = new Engineer();
            expect("name" in obj).toEqual(true);
        });
        it("should return an object containing a 'id' property when called with the 'new' keyword", () => {
            const obj = new Engineer();
            expect("id" in obj).toEqual(true);
        });
        it("should return an object containing a 'email' property when called with the 'new' keyword", () => {
            const obj = new Engineer();
            expect("email" in obj).toEqual(true);
        });
        it("should return an object containing a 'github' property when called with the 'new' keyword", () => {
            const obj = new Engineer();
            expect("github" in obj).toEqual(true);
        });
    });

    describe("returnEngineerInfo", () => {
    //     // Positive Tests
        it("should return the engineer name", () => {
            const engineer = new Engineer();
            engineer.name = "Engineer John Doe";
            expect(engineer.getName()).toEqual(engineer.name);
        });
        it("should return the engineer ID", () => {
            const engineer = new Engineer();
            engineer.id = 103;
            expect(engineer.getId()).toEqual(engineer.id);
        });
        it("should return the engineer email", () => {
            const engineer = new Engineer();
            engineer.email = "Engineer.John.Doe@email.com";
            expect(engineer.getEmail()).toEqual(engineer.email);
        });
        it("should return the engineer GitHub", () => {
            const engineer = new Engineer();
            engineer.github = "john-doe-github";
            expect(engineer.getGithub()).toEqual(engineer.github);
        });
        it("should return the engineer role", () => {
            const engineer = new Engineer();
            expect(engineer.getRole()).toEqual("Engineer");
        });

        // Exception tests
        it("should throw an error if not provided an engineer name", () => {
            const engineer = new Engineer();
            //engineer.name = "Engineer John Doe";
            engineer.id = 103;
            engineer.email = "Engineer.John.Doe@email.com";
            engineer.github = "john-doe-github";
            expect(typeof engineer.getName()).toEqual("undefined");
        });
        it("should throw an error if not provided an engineer ID", () => {
            const engineer = new Engineer();
            engineer.name = "Engineer John Doe";
            //engineer.id = 103;
            engineer.email = "Engineer.John.Doe@email.com";
            engineer.github = "john-doe-github";
            expect(typeof engineer.getId()).toEqual("undefined");
        });
        it("should throw an error if not provided an engineer email", () => {
            const engineer = new Engineer();
            engineer.name = "Engineer John Doe";
            engineer.id = 103;
            //engineer.email = "Engineer.John.Doe@email.com";
            engineer.github = "john-doe-github";
            expect(typeof engineer.getEmail()).toEqual("undefined");
        });
        it("should throw an error if not provided an engineer GitHub", () => {
            const engineer = new Engineer();
            engineer.name = "Engineer John Doe";
            engineer.id = 103;
            engineer.email = "Engineer.John.Doe@email.com";
            //engineer.github = "john-doe-github";
            expect(typeof engineer.getGithub()).toEqual("undefined");
        });
    });

});

