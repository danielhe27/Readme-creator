// License data used for the badge, the link and the license section.
// Keys match the choices offered in index.js.
const licenses = {
  MIT: {
    badge: '![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)',
    link: 'https://opensource.org/licenses/MIT',
  },
  'Apache 2.0': {
    badge: '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    link: 'https://opensource.org/licenses/Apache-2.0',
  },
  'GPL 3.0': {
    badge: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    link: 'https://www.gnu.org/licenses/gpl-3.0',
  },
  'BSD 3': {
    badge: '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)',
    link: 'https://opensource.org/licenses/BSD-3-Clause',
  },
};

const licenseChoices = [...Object.keys(licenses), 'None'];

// Returns the badge markdown, or an empty string if there is no license
function renderLicenseBadge(license) {
  return licenses[license] ? licenses[license].badge : '';
}

// Returns the license URL, or an empty string if there is no license
function renderLicenseLink(license) {
  return licenses[license] ? licenses[license].link : '';
}

// Returns the License section, or an empty string if there is no license
function renderLicenseSection(license) {
  if (!licenses[license]) return '';
  return `## License
This project is licensed under the [${license} license](${renderLicenseLink(license)}).
`;
}

// Builds the README from the user's answers
function generateMarkdown(data) {
  const license = data.license;
  const hasLicense = Boolean(licenses[license]);

  return `# ${data.title}

${renderLicenseBadge(license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${hasLicense ? '- [License](#license)\n' : ''}- [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

${renderLicenseSection(license)}
## Questions
If you have any questions, please contact me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
module.exports.licenseChoices = licenseChoices;
module.exports.renderLicenseBadge = renderLicenseBadge;
module.exports.renderLicenseLink = renderLicenseLink;
