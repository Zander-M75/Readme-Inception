// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license === 'MIT' || 'Mozilla Public License 2.0' || 'Apache License 2.0' || 'GNU AGPLv3', 'GNU GPLv3' || 'GNU LGPLv3') {
    badge = `https://shields.io/badge/license-${license}-green`
  }
  return badge

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let link;
  switch (license) {
    case "MIT":
      link = "https://mit-license.org/";
      break;
    case "Mozilla Public License 2.0":
      link = "https://www.mozilla.org/en-US/MPL/2.0/";
      break;
    case "Apache License 2.0":
      link = "https://www.apache.org/licenses/LICENSE-2.0";
      break;
    case "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3":
      link = "https://www.gnu.org/licenses/agpl-3.0.en.html"
      break;
    default:
      link = "";
      break;
  }

  return link;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = "";
  if (license === 'MIT' || 'Mozilla Public License 2.0' || 'Apache License 2.0' || 'GNU AGPLv3', 'GNU GPLv3' || 'GNU LGPLv3') {
    section += "## License\n"
  }
}





// TODO: Create a function to generate markdown for README

const generateMarkdown = ({ github, email, project, descr, license, install, test, usage, contributions }) => {

  return `# <${project}>

## Description
${descr}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${install}

## Usage
${usage}

## License
${license}

## How to Contribute
${contributions}

## Tests
${test}

## Contact
My GitHub username is: ${github} \nMy email address is: ${email}
`
}

module.exports = generateMarkdown;
