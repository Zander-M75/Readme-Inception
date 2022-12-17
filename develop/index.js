// Imported required packages
// 'fs', 'path', 'inquirer', './utils/generateMarkdown'

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('./utils/generateMarkdown');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');



// Array of questions for user input
inquirer
  .prompt([
    {// question object for github user name
      type: 'input',
      name: 'github',
      message: 'What is your GitHub Username?',
    },

    {// question object for email
      type: 'input',
      name: 'email',
      message: 'What is your preferred email address?',
    },

    {// question object for project name
      type: 'input',
      name: 'project',
      message: 'What is the title of your Project/Repo?',
    },

    {// question object for the description
      type: 'input',
      name: 'descr',
      message: 'Write a description for your project',
    },

    {// question object for license
      type: 'list',
      name: 'license',
      message: 'Choose a License for your project',
      choices: ['MIT', 'Mozilla Public License 2.0', 'Apache License 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'No License'],
    },

    {// question object for the installation instruction with default
      type: 'input',
      name: 'install',
      message: 'Please include any installation instructions if necessary',
    },

    {// question object for test with default
      type: 'input',
      name: 'test',
      message: 'Include any relevant test information/instructions',
    },

    {// question object for usage of the repo
      type: 'input',
      name: 'usage',
      message: 'Provide instructions of your project in use if applicable',
    },

    {// question object for contributing to the repo
      type: 'input',
      name: 'contributions',
      message: 'Provide details as to how other developers can contribute to your project',
    },
  ])


  .then((data) => {
    const content = generateMarkdown(data);


    fs.writeFile("ReadMe.MD", content, (err) =>
      err ? console.log(err) : console.log("Nice Job!")
    );
  });


// function init() {



// }

// init();






// Function to write README file using the user input
// TODO:
// fs write function to create the README.md file
// path package can be used to create the file path
// function writeToFile(fileName, data) {


//   fs.writeFile(fileName, data, (err) =>
//     err ? console.log(err) : console.log("Nice Job!")
//   )
// };

// Function to initialize app
// function init() {

  // TODO:
  // call inquirer prompt method for questions
  // inside .then callback
  // call generateMarkdown passing answer object as input argument
  // call writeFile passing file name and the returned value from generateMarkdown function as input arguments

// }

// init();
