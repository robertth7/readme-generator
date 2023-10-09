// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects title? (Required)',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter title name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?'
        },
        {
            type: 'input',
            name: 'why',
            message: 'Why did you build this project? (Required)',
            validate: whyInput => {
                if (whyInput) {
                    return true;
                } else {
                    console.log('You need to complete this question!');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'solve',
            message: 'What problem does it solve? (Required)',
            validate: solveInput => {
                if (solveInput) {
                    return true;
                } else {
                    console.log('You must complete this question!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn? (Required)',
            validate: learnInput => {
                if (learnInput) {
                    return true;
                } else {
                    console.log('You must complete this question!');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('You must enter installation steps!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license that will best suit your project.',
            choices: ['MPL 2.0', 'GNU', 'Apache', 'MIT', 'None of the above'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Select a license for the project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'If you created an application and would like other developers to contribute. Include guideline on how to contribute.'
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Success! You can now preview your README file");
    });
};

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init()
