//Create a function to generate markdown for README
function generateMarkdown(data) {
  //Badges for the liscense
  function badges(license){
    var badge = 'https://img.shields.io/badge/' + license + '-GPL-blue.svg';
    return (`${badge}\n`); 
  }
  //Creating the Liscence 
  var licDes = ""; 
  if (data.license === "MIT"){ 
    licDes= "Copyright 2022 "+data.name+"\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."; 
  }
  else if (data.license === "GPLv2"){
    licDes = "Copyright (C) 2022 "+data.name+"\n\n This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.\n\nThis program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.\nYou should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA";
  }
  else if (data.license === "Apache"){
    licDes = "Copyright 2022 " +data.name+"\n\nLicensed under the Apache License, Version 2.0 (the License);\n\n you may not use this file except in compliance with the License.\n\nYou may obtain a copy of the License at\n\n http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software distributed under the License is distributed on an AS IS BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n\nSee the License for the specific language governing permissions and limitations under the License";
  }
  else{licDes = `This project does not contain a license.`;} 
  //Displays the instructions as a string 
  function instList(str){
    var listArray = str.split(','); 
    var list = ``;
    listArray.forEach(ele => {
        list = list +"-" + ele + `\n`;
    })
     return (`${list}`);
  }
  //Contribution looking for defaults  
  function contInst(str){
      if(str === ""){
        var retStr = '- [Contributor Covenant](https://www.contributor-covenant.org/)';
        return retStr;
      }
      return str;
  }
return `
# ${data.projectName}

## Description 
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
Here is how to install this application: 
${instList(data.installation)}

## Usage
${data.usage}

## Contributing
${contInst(data.contributor)}

## Tests
${data.tests}

## Questions
Any questions and feedbacks are welcomed for the approval of this application. Don't hesitate to contact me using the following:
- Link to Github Repo: https://github.com/${data.github}
- Email: ${data.email} 

## License
- ![Badge](${badges(data.license)})

${licDes}

`;
}

module.exports = generateMarkdown;
