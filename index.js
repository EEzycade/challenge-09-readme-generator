// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your application?',
    'Please write a short description of what the app does?',
    'Which technologies did you use? (separate by commas)',
    'Which license does your application use?',
    'Enter the deployed URL of the application.',
    'Who contributed to the project?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'technologies',
            message: questions[2],
            validate: techsInput => {
                if (techsInput) {
                    return true;
                } else {
                    console.log('Please enter the technologies used!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: questions[3],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please enter a license!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'siteUrl',
            message: questions[4],
            validate: siteUrlInput => {
                if (siteUrlInput) {
                    return true;
                } else {
                    console.log('Please enter a URL!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: questions[5],
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Please enter at least one contributor!');
                    return false;
                }
            }
        }
    ]);
}

// Function call to initialize app
init();
