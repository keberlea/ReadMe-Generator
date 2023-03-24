// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateReadme = require('./utils/generateMarkdown')
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [];
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'Title',
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
                name: 'Description',
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
        }
        );

// TODO: Create a function to write README file
function writeToFileAsync (fileName, data) {

    fs.writeFile('README.md', writecontent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md file!')
    );
}

// TODO: Create a function to initialize app
async function init() {
    try {
        //Ask questions and generate responses
        const answers = await questions();
        const generateContent = generateReadme(answers);
        //write new README.md
        await writeFileAsync('./dist/README.md', generateContent);
        console.log ('Successfully wrote to README.md');
    } catch (error) {
        console.log(err)
    }
}

// Function call to initialize app
init();
