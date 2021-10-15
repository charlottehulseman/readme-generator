// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./generateMarkdown');

// Create an array of questions for user input
    inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a description for your project",
        name: "description"
    },
    {
        type: "input",
        message: "Provide usage guidelines for your project",
        name: "usage"
    },
    {
        type: "input",
        message: "Provide installation instructions for your project",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter any and all contribution information for your project",
        name: "contribution"
    },
    {
        type: "input",
        message: "Provide test instructions for your project",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "list",
        message: "Which license does your project fall under?",
        name: "license",
        choices: ['Apache', 'Boost','Eclipse','GNU','MIT','WTFPL']
    }
])

.then(({title,description,usage,installation,contribution,test,username,email,license}) => {
    switch(license) {
        case "Apache":
            var licenseType =  `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;

        case "Boost":
            var licenseType = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
            break;

        case 'Eclipse':
            var licenseType = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
            break;
        
        case "GNU":
            var licenseType = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            break;

        case "MIT":
            var licenseType = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            break;
        
        case 'WTFPL':
            var licenseType = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`

    }
    console.log(licenseType);
    const generatedReadme = 
`
# **${title}**

## **Table of Contents**
- [Contributors](./newREADME#contibutors)
- [Project Description](./newREADME#description)
- [Usage Guidelines](./newREADME#usage-guide)
- [Installation Instructions](./newREADME#installation-instructions)
- [Test Instructions](./newREADME#test-instructions)
- [License](./newREADME#licensing)
- [Contact](./newREADME#contact)

## **Contributors:**
${contribution}

## **Description:**
${description}

## **Usage Guide:**
${usage}

## **Installation Instructions:**
${installation}

## **Test Instructions:**
${test}

## **Licensing:**
${license}

## **Contact:**
${username}
${email}
`

// take the input data and create JSON string

    fs.writeFile("testREADME.md", generatedReadme, (err) =>
        err ? console.log(error): console.log("Successfully generated README file!"));
    });