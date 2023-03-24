// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [];
    inquirer
        .prompt([
            {
                type: 'input',
                name: ' ',
                message: 'what is ',
            },
        ])
        .then((answers) => {
          console.log(answers);

          const writecontent = writeToFile(answers);
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
