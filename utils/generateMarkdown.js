
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
  
  return selectedLicense ? selectedLicense.badge : '';
}

function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)',
    Apache: '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    GPL: '!License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    BSD3: '![License: BSD 3](https://img.shields.io/badge/License-BSD%203-Clause-yellow.svg)',
    None: '',
  };
  return licenseBadges[license] || '';
}

function renderLicenseLink(license) {
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
  const selectedLicense = licenseInfo;

  return selectedLicense ? selectedLicense.link : '';
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  if (license) {
    return `## License
  This project is licensed under the [${license} license]`;
  } else {
    return '';
  }
}



function generateMarkdown(data) {
  const license = data.license[0]; // Extracting the license information from user input
  const licenseSection = renderLicenseSection(license);

  return `# ${data.title}

  ${renderLicenseBadge(license)}


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

  ${licenseSection}


  
  ## Questions
  If you have any questions, please contact me:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
