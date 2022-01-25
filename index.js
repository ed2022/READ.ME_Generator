// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
      { //PROJECT TITLE
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project or repo?',
      },    
      { //DESCRIPRION 
        type: 'input',
        name: 'description',
        message: 'Please write a short discription of your project: ',
      },    
      { //INSTALLATION 
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? \nProvide a step-by-step description of how to get the development environment running and separet the list with ",".',
      },
      { //USAGE 
        type: 'input',
        name: 'usage',
        message: 'What is the main usage for this application?',
      },       
      { //LISCENSE
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['MIT', 'GPLv2', 'Apache', 'None'],
      },
      { //CONTRIBUTOR
        type: 'input',
        name: 'contributor',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. \n The Contributor Covenant is an industry standard, but you can always write your own if you would prefer.\n',
      },
      {//TESTS
        type: 'input',
        name: 'tests',
        message: 'What is type of test would you like the user to preform?',
      },
      { //NAME 
        type: 'input',
        name: 'name',
        message: 'What is your name?',
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
    fs.writeFile('./Example/README.md', generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
