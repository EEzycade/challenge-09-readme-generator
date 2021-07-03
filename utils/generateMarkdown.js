// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT License') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }
    if (license === 'GNU General Public License') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    }
    if (license === 'Mozilla License') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT License') {
        return `[MIT License](https://opensource.org/licenses/MIT)`;
    }
    if (license === 'GNU General Public License') {
        return `[GPL v3](https://opensource.org/licenses/GPL-3.0)`;
    }
    if (license === 'Mozilla License') {
        return `[Mozilla License](https://opensource.org/licenses/MPL-2.0)`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Function not necessary for acceptance criteria because of the above function 
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
    
${data.description}

Deployed URL: ${data.siteUrl}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Installation
    
${data.installation}

## Usage
    
${data.usage}

## License
    
${renderLicenseLink(data.license)}

## Contributors
    
${data.credits}

## Tests
    
${data.tests}

## Questions
    
If you have any questions, don't hesitiate to reach out either via email or my GitHub. 
* ${data.email}
* [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
