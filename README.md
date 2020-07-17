# Employee-Summary-Generator
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]

## Description: 
Welcome to my Employee Summary Generator using Node.js and the modules INQUIRER and JEST.
Inquirer is used to prompt the user to enter employee details. JEST is used to run unit tests on the application.
This is the link to a video demonstrating the application: https://drive.google.com/file/d/1CrJ6TjLbtWzO2ChNdIytVnpUDagezvv5/view (for the best video resolution, please select the 720p quality option).

## Table of Contents 
* [Installation](#Installation) 
* [Usage Information](#Usage) 
* [Contributing](#Contributing) 
* [Test Instructions](#Tests) 
* [Questions](#Questions) 
* [License](#License)  

## Installation: 
1. Clone the Employee Summary Generator project files to your local machine using this link: https://github.com/ong-osmond/Employee-Summary-Generator.git
2. Install NODE.js on your machine. Find the latest version on https://nodejs.org/en/
3. Open Git Bash or any Command Line tool and type in "NPM INSTALL". 
4. Install the Inquirer module by typing in "NPM INSTALL INQUIRER".
5. Install the JEST module by typing in "NPM INSTALL JEST".

## Usage: 
Follow these steps to generate the Employee Summary / Team HTML file:

1. Open Git Bash or your Command Line tool and type in "NODE APP".
![Run Node App](/assets/img/01-Run-Node-App.png)

2. A series of prompts will ask you to enter the details of your employees. A team is composed of a Manager, one or more Engineers, and/or one or more Interns.  
![Enter Details](/assets/img/03-Add-More-Employees.png)

3. After typing in your answer to each prompt, press ENTER to proceed to the next prompt. 
   If you did not enter an answer, or did not enter a number for the employee ID or Manager office number, or typed in an invalid email address, the program will not continue and return an error message.
   You may exit the program at any time by typing in CTRL+C.
![Enter Details and Input Validations](/assets/img/02-Input-Validations.png)   

4. You may enter as many Engineers or Interns as desired. 

5. If you select No when asked if another employee should be entered, a message will tell you that the team.html file has been generated. This is saved in the "output" folder.
![End Program](/assets/img/04-End-Program.png)   

6. Open your team.html file to confirm that everything has been saved correctly.  
![Team HTML File](/assets/img/05-Team-HTML-File.png)   

## Contributing: 
Everyone is welcome to contribute to this project. Please email me at ong.osmond@yahoo.com or fork the project from GitHub to your own repository.

## Tests: 
Test js files are available in the "test" folder.
Open Git Bash or your Command Line tool and type in "NPM RUN TEST" to run all the tests (or run a single test suite by typing in its filename, e.g. "NPM RUN TEST TEST/Employee.test.js").
![Node Run Test](/assets/img/06-Run-Tests.png)   
For reference, these tests have been included:
  
  Employee:
  
  1. Can instantiate Employee instance 
  2. Can set name via constructor arguments 
  3. Can set id via constructor argument
  4. Can set email via constructor argument
  5. Can get name via getName()
  6. Can get id via getId() 
  7. Can get email via getEmail()
  8. getRole() should return "Employee"
  
  Manager:
  
  9. Can set office number via constructor argument 
  10. getRole() should return "Manager" 
  11. Can get office number via getOffice()
  
  Engineer:
  
  12. Can set GitHUb account via constructor 
  13. getRole() should return "Engineer" 
  14. Can get GitHub username via getGithub()
  
  Intern:
  
  15. Can set school via constructor
  16. getRole() should return "Intern"
  17. Can get school via getSchool()
  
Additional tests have been included for positive and exception cases. Please refer to the test files.
 

## Questions: 
Please visit my [GitHub Page](https://github.com/ong-osmond/) or email me your questions at ong.osmond@yahoo.com. 
I am available 8am-4pm Monday-Friday (Australian Western Standard Time). 

## License: 
This software is under the ISC License. Copyright (c) 2020, https://github.com/ong-osmond Permission to use, copy, modify, and/or distribute this software for any purpose with or 
            without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD 
            TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. 
            IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES 
            OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, 
            NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF 
            THIS SOFTWARE. 
