// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

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
My GitHub username is: ${github}
My email address is: ${email}
`
}

module.exports = generateMarkdown;
