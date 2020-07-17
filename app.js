/*jshint esversion: 6 */

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Initialise Employees Array
var employeesArray = [];

//Begin to inquire; start with the manager
function initialiseProgram() {
    console.log("Welcome to the Employee Summary Generator. Press Control+C anytime to exit.");
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
            }
        ])
        .then(function (response) {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
            employeesArray.push(manager);
            promptForNextEmployee();
        });

}

//Prompt for the next employee type or render the HTML file to end the program
function promptForNextEmployee() {
    inquirer
        .prompt(
            {
                type: "list",
                message: "Enter another employee?",
                name: "employeeRole",
                choices: ["Engineer",
                    new inquirer.Separator(),
                    "Intern",
                    new inquirer.Separator(),
                    "No"
                ]
            }
        )
        .then(function (response) {
            switch (response.employeeRole) {
                case ("Engineer"):
                    addEngineer();
                    break;
                case ("Intern"):
                    addIntern();
                    break;
                default:
                    renderEmployees(employeesArray);
            }
        });
}

//Add Engineer details
function addEngineer() {
    inquirer
        .prompt([
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
            }
        ])
        .then(function (response) {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            employeesArray.push(engineer);
            promptForNextEmployee();
        });

}

//Add Intern details
function addIntern() {
    inquirer
        .prompt([
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
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            employeesArray.push(intern);
            promptForNextEmployee();
        });

}

//Create the HTML file and exit program
function renderEmployees(employeesArray) {
    var renderedHMTL = render(employeesArray);
    fs.writeFile(outputPath, renderedHMTL,
        function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Employee Summary HTML file successfuly generated. Please check the output folder.");
        }
    );
}

initialiseProgram();