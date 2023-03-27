// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function getLicenseBadge (License) {
  const licenseImgMap = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GNU GPL v3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    // add more license IMG URLs here as needed
  }
  const licenseImg = licenseImgMap[License]
    return `
    ![badge](${licenseImg})`
  }


function getLicense (License) {
  if (!License) {
    return ''
  }
  const licenseImgMap = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GNU GPL v3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    // add more license IMG URLs here as needed
  }
  const licenseUrlMap = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU GPL v3': 'https://www.gnu.org/licenses/gpl-3.0',
    // add more license URLs here as needed
  }
  const licenseUrl = licenseUrlMap[License]

  const licenseImg = licenseImgMap[License]

  return `
    [![License](${licenseImg})](https://opensource.org/licenses/${licenseUrl})`
}

//const license = getLicense()
//console.log(license)




/*
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

*/

function generateMarkdown (answers) {
  return (
    `
  # ${answers.Title}

  lincense badge here
  `
  + 
  getLicenseBadge(answers.License) 
  +
  `
  

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
  ` +
    getLicense(answers.License)
    +
  `
  This application is covered by the ${answers.License} license.
  
  ## Contributing
  ${answers.Contributers}


  `
  )
}

module.exports = generateMarkdown

//![badge](https/img.shields.io/badge.license-${answers.License}-brightgreen)
