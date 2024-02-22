// we are setting  the path to the file that will be created and using the fs.writeFile method to write the file.
   const fs = require('fs'); 
  const inquirer = require('inquirer'); 
  const generateMarkdown = require('./utils/generateMarkdown.js');

  now thos are the questions that will be asked to the user.
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
      choices: ["MIT", "Apache2.0", "GPL3.0", "BSD3", "None"],
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
