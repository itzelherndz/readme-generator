// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`;
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](${renderLicenseLink(license)})`;
    case 'GNU GPLv3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](${renderLicenseLink(license)})`;
    default: 
      return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case `MIT License`:
      return 'https://opensource.org/licenses/MIT';
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license){
    case `MIT License`:
      return `This application is covered by the [MIT License](${renderLicenseLink(license)}).`;
    case 'Apache License 2.0':
      return `This application is covered by the [Apache License 2.0](${renderLicenseLink(license)}).`;
    case 'GNU GPLv3':
      return `This application is covered by the [GNU GPLv3 License](${renderLicenseLink(license)}).`;
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}\n
## Description\n${data.description}\n
## Table of Contents\n
### [Installation](#installation)\n
### [Usage](#usage)\n
### [License](#license)\n
### [Contributing](#contributing)\n
### [Tests](#tests)\n
### [Questions](#questions)\n
## Installation\n${data.installation}\n
## Usage\n${data.usage}\n
## License\n${renderLicenseSection(data.license)}\n
## Contributing\n${data.contributing}\n
## Tests\n${data.tests}\n
## Questions\nFor any questions please contact me via:\n
GitHub: [${data.username}](https://github.com/${data.username})\n
Email: [${data.email}](${data.email})`;
}

module.exports = generateMarkdown;
