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
  return `# ${data.projectName}
  ## Description 
  ${data.description}
  ## Table of Contents
      - [Description](#description)
      - [Installation](#installation)
      - [Usage](#usage)
      - [License](#license)
      - [Contributing](#contributing)
      - [Tests](#tests)
      - [Questions](#questions)
  ## Installation
  Here is how to install this application: 
  ${data.installation}
  ## Usage
  ## License
  ## Contributing
  ## Tests
  ## Questions
  Any questions and feedbacks are welcomed for the approval of this application. Don't hesitate to contact me using the following:
  - Link to Github Repo: http:github.com/${data.github}
  - Email: ${data.email} 

`;
}

module.exports = generateMarkdown;
