// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [];
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'Project Title',
                message: 'What is the title of your project?',
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("A valid project title is required.");
                    }
                    return true;
                 }
            },
            {
                type: 'input',
                name: 'Project Description',
                message: 'What is the description of your project?',
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("A valid project description is required.");
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'Installation',
                message: 'Describe the steps requried to install your project?',
            },
            {
                type: 'input',
                name: 'Usage',
                message: 'Instruction for use and examples of your project in use.'
            },
            {
                type: 'input',
                name: 'Contributers',
                message: 'Are there guidelines for others to contribute to your project?'
            },
            {
                type: 'list',
                name: 'License',
                choices: ['MIT License','Apache License 2.0','GNU General Public License', 'No license'],
                message: 'Choose a license for your project:'
            },
        ])
        .then((answers) => {
          console.log(answers);
       
         fs.writeFile('README.md', (err) =>
        err ? console.log(err) : console.log('Successfully created README.md file!')
    );
        }
        );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('README.md', writecontent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md file!')
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
