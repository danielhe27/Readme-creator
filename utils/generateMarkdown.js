

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

  function renderLicenseSection(license) {
    if (license) {
      return `## License
    This project is licensed under the [${license} license](${renderLicenseInfo(license).link}).`;
    } else {
      return '';
    }
  }
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

function generateMarkdown(data) {
  const licenseInfo = renderLicenseInfo(data.license[0]);


  return `# ${data.title}


![Github licence](http://img.shields.io/badge/license-${data.license})

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

  ## License
${licenseInfo.badge} This project is licensed under the [${data.license[0]} license](${licenseInfo.link}).

  
  ## Questions
  If you have any questions, please contact me:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
