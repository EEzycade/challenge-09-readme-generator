// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your application?',
    'Please write a short description of what the app does?',
    'Enter the deployed URL of the application.',
    'Please provide some installation instructions',
    'Please provide some details on how to use the app.',
    'Which license does your application use?',
    'Who contributed to the project?',
    'Please provide info on how to test the app',
    'What is your GitHub username?',
    'What is your email address?'


];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
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
            name: 'siteUrl',
            message: questions[2],
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
            name: 'installation',
            message: questions[3],
            validate: techsInput => {
                if (techsInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[4],
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter the technologies used!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: questions[5],
            choices: ['GNU General Public License', 'MIT License', 'Mozilla License']
        },
        {
            type: 'input',
            name: 'credits',
            message: questions[6],
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Please enter at least one contributor!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[7],
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter info on how to test the app!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: questions[8],
            validate: gHInput => {
                if (gHInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[9],
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ])
        .then((readmeData) => {
            const pageMarkdown = generateMarkdown(readmeData);
            fs.writeFileSync(path.join(__dirname, './README.md'), pageMarkdown, { encoding: 'utf8' });
            
        });
};

// Function call to initialize app
init();
