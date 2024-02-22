// Function call to initialize app
// Import necessary modules
const inquirer = require("inquirer");
const fs = require('fs');


// Function to generate Markdown content based on user responses
function generateMarkdown(responses) {

  
  return `
  # ${responses.title}
  
  ## Description
  ${responses.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  To install the necessary dependencies, run the following command:
  \`\`\`
  ${responses.installation}
  \`\`\`
  
  ## Usage
  ${responses.usage}
  
  ## Contributing
  Contributors to this project: ${responses.contributing}
  
  ## Tests
  To run tests, use the following command:
  \`\`\`
  ${responses.tests}
  \`\`\`
  
  ## License
  This project is licensed under the ${responses.license} license.
  
  ## Questions
  For any questions or concerns, please reach out to [${responses.email}](${responses.email}) or visit the [GitHub repository](https://github.com/${responses.github}/${responses.title}).
  
  `;
}

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm install",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage of your project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "checkbox",
    message: "What is the license for your project?",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

function init() {
  console.log("Welcome to the README generator!, Answer the following questions to generate your README file.");
     
  // Prompt user with questions
  inquirer
  .prompt(questions)
  .then((responses) => {
    // Use the responses to generate the content for the README file
    const readmeContent = generateMarkdown(responses);
    
    // Write README file
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Successfully created README.md. Congratulations!');
      }
    });
  });
}

// Function call to initialize app
init();


// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README