// TODO: Create a function that returns a license badge and link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseInfo(license) {
  const licenseInfo = {
   MIT: {
      badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)]',
      link: 'https://opensource.org/licenses/MIT',
    },
    Apache: {
      badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
      link: 'https://opensource.org/licenses/Apache-2.0',
    },
    GPL: {
      badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
      link: 'https://www.gnu.org/licenses/gpl-3.0',
    },
    BSD: {
    badge: '[![License: BSD 3](https://img.shields.io/badge/License-BSD%203-Clause-yellow.svg)]',
    link: 'https://opensource.org/licenses/BSD-3-Clause',
    },
    None: {
      badge: '',
      link: '',
    }
  };

  const selectedLicense = licenseInfo[license.toLowerCase()];

  if (selectedLicense) {
    return {
      badge: selectedLicense.badge,
      link: selectedLicense.link,
    };
  } else {
    return {
      badge: '',
      link: '',
    };
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
  This project is licensed under the [${license} license](${renderLicenseInfo(license).link}).`;
  } else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseInfo = renderLicenseSection(data.license[0]);;

  return `# ${data.title}

  ${licenseInfo.badge}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ${licenseInfo.section}
  
  ## Questions
  If you have any questions, please contact me:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
