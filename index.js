// Asks questions in the terminal and writes a README from the answers.
  const fs = require('fs');
  const path = require('path');
  const inquirer = require('inquirer');
  const generateMarkdown = require('./utils/generateMarkdown.js');

  // The generated file goes in output/ so it never overwrites this project's own README.
  const OUTPUT_DIR = path.join(__dirname, 'output');

  // These are the questions that will be asked to the user.
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
      type: "list",
      message: "What is the license for your project?",
      name: "license",
      choices: generateMarkdown.licenseChoices,
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
// this function will init 
  function init() {
    console.log("Welcome to the README generator!, Answer the following questions to generate your README file.");
    // Inquirer will prompt the user with the questions stored in the questions array.
    inquirer
    .prompt(questions)
    .then((responses) => {
      // Use the responses to generate the content for the README file
      const readmeContent = generateMarkdown(responses);

      // Write README file
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
      const outFile = path.join(OUTPUT_DIR, 'README.md');
      fs.writeFile(outFile, readmeContent, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Successfully created ${path.relative(process.cwd(), outFile)}. Congratulations!`);
        }
      });
      });
  }

  // Function call to initialize app
  if (require.main === module) init();
