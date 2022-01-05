// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
      { //PROJECT TITLE
        type: 'input',
        name: 'projectName',
        message: 'What is the name your project?',
      },    
      { //DESCRIPRION 
        type: 'input',
        name: 'description',
        message: 'Please write a short discription of your project: ',
      },    
      { //INSTALLATION 
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      },      
      { //LISCENSE
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'liscense',
        choices: ['MIT', 'GPLv3', 'Apache', 'ISC'],
      },
      { //GITHUB
        type: 'input',
        name: 'github',
        message: 'What is your Github name?',
      },
      { //EMAIL
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },

];

inquirer
  .prompt(questions)
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
