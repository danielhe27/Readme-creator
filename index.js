
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file


// TODO: Create a function to initialize app


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
    type: "input",
    name: "license",
    message: "What is the license for your project?",
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

