function generateMarkdown(answers) {
  return `
  <h1 align ="center"> ${answers.Title} </h1>
  
  ![badge](https://img.sheilds.io/badge/licnese-${answers.license}-brightgreen)<br/>
  
  ## Description
    ${answers.Description}

  ## Table of Contents
   - [Description](#Description)
   - [Installation](#Installation)
   - [Usage](#Usage)
   - [License](#License)
   - [Contributing](#Contributers)
   - [Tests](#Tests)
   - [Questions](#Questions)

  ## Installation
  ${answers.Installation}

  ## Usage
  ${answers.Usage}

  ## License
  ![badge](https/img.shields.io/badge.license-${answers.License}-brightgreen)
  This application is covered by the ${answers.License}.

  ## Contributing
  ${answers.Contributers}


  `
}
/*

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
*/
module.exports = generateMarkdown;
