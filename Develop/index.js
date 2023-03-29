// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// questions array 
let questions = [];
    inquirer
        .prompt([
            //project title
            {
                type: 'input',
                name: 'Title',
                message: 'What is the title of your project? Required',
                //make sure there is an answer that is more than 1 character
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("A valid project title is required.");
                    }
                    return true;
                 }
            },
            //project description
            {
                type: 'input',
                name: 'Description',
                message: 'What is the description of your project? Required',
                //make sure there is an answer that is more than 1 character
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("A valid project description is required.");
                    }
                    return true;
                }
            },
            //project installation
            {
                type: 'input',
                name: 'Installation',
                message: 'Describe the steps requried to install your project?',
            },
            //project instructions
            {
                type: 'input',
                name: 'Usage',
                message: 'Instruction for use and examples of your project in use.'
            },
            //project contributers
            {
                type: 'input',
                name: 'Contributers',
                message: 'Are there guidelines for others to contribute to your project?'
            },
            //choose the type of License for the repository
            {
                type: 'list',
                name: 'License',
                choices: ['MIT','Apache 2.0','GNU GPL v3', 'No License'],
                message: 'Choose a license for your project:'
            },
            //project tests
            {
                type: 'input',
                name: 'Tests',
                message: 'Provide instrustion and/or guidelines for running tests?'
            },
            //personal github
            {
                type: 'input',
                name: 'GitHub',
                message: 'Enter Github Username:'
            },
            //personal/contact email
            {
                type: 'input',
                name: 'Email',
                message: 'Enter email associated with github account got questions:'
            },
            
        ])
        .then((answers) => {
            //log answers into console
            console.log(answers);
            //function to write the files using the answers
            function init() {
            //write new README.md using the generateMarkdown function from the generateMarkdown.js file using the answers
                fs.writeFile('README.md', generateMarkdown(answers), (err) =>
                err ? console.log(err) : console.log ('Successfully wrote to README.md'));
                };
            //call function to write README.md
            init();
        }
        );


 module.exports = generateMarkdown;

