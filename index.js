// Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    'What is your project title?',
    'How would you briefly describe your project?',
    'What are the steps required to install your project?',
    'How do you reccomend the user to use your project?',
    'Did you use a license?',
    'Which license did you utilize?',
    'What are your contribution guidelines?',
    'Would you like to provide tests for your project?',
    'Write the tests for your application and provide examples on how to run them.',
    'What is your GitHub username?',
    'What is your email?'
];

// Function to write README file
function writeToFile(fileName, data) {}

// Function to initialize app
function init() {}

// Function call to initialize app
init();
