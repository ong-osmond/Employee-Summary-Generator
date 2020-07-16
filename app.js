const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//Run the inquirer module
function initialiseProgram() {
    inquirer
        .prompt([
        
        {
            type: "input",
            message: "Enter the name of the Manager",
            name: "managerName"
        },
        {
            type: "input",
            message: "Enter Manager ID",
            name: "managerId"
        },
        {
            type: "input",
            message: "Enter Manager email address",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Enter Manager office number",
            name: "managerOfficeNumber"
        },
    
        {
            type: "input",
            message: "Enter the name of the Engineer",
            name: "engineerName"
        },
        {
            type: "input",
            message: "Enter Engineer ID",
            name: "engineerId"
        },
        {
            type: "input",
            message: "Enter Engineer email address",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "Enter Engineer Github ID",
            name: "engineerGithub"
        },

        {
            type: "input",
            message: "Enter the name of the Intern",
            name: "internName"
        },
        {
            type: "input",
            message: "Enter Intern ID",
            name: "internId"
        },
        {
            type: "input",
            message: "Enter Intern email address",
            name: "internEmail"
        },
        {
            type: "input",
            message: "Enter Intern school",
            name: "internSchool"
        }

    ])
        .then(function (response) {
            
            var employeesArray = [];

            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
            var managerRole = manager.getRole(manager);
            console.log(`Hello! I've verified that the manager's role is really ${managerRole}`);
            employeesArray.push(manager);

            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            employeesArray.push(engineer);

            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            employeesArray.push(intern);

            console.log(employeesArray);

            renderEmployees(employeesArray);
            
        });

}

initialiseProgram();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

function renderEmployees(employeesArray) {
    console.log(employeesArray);
    var renderedHMTL = render(employeesArray);

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

    fs.writeFile(outputPath, renderedHMTL,
        function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("HTML file generated. Please check the output folder.");
        }
        )
}

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```