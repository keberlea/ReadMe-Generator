// get License Badge for top of readme file
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

// get correct license and badge for the license section of the ReadMe file
function getLicense (License) {
  if (!License) {
    return ''
  }
  //img links to correct badge for each type of License referenced
  const licenseImgMap = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GNU GPL v3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    // add more license IMG URLs here as needed
  }
  //url links to correct licenses for each type of License referenced
  const licenseUrlMap = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU GPL v3': 'https://www.gnu.org/licenses/gpl-3.0',
    // add more license URLs here as needed
  }
  //Licence Url const
  const licenseUrl = licenseUrlMap[License]
  //IMG URL const
  const licenseImg = licenseImgMap[License]

  return `
  [![License](${licenseImg})](https://opensource.org/licenses/${licenseUrl})`
}

//function to generate markdown of the README file
function generateMarkdown (answers) {
  return (
    `
  # ${answers.Title}
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
  `+
  getLicense(answers.License)
  +
  `

  This application is covered by the ${answers.License} license.
  
  ## Contributing
  ${answers.Contributers}

  ## Tests
  ${answers.Tests}

  ## Questions
  Link to GitHub profile: https://github.com/${answers.GitHub}
  
  If you have questions you can reach me by email at the following address: ${answers.Email}
  `
  )
}

module.exports = generateMarkdown


