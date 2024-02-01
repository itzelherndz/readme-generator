// Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    'What is your project title?',
    'How would you briefly describe your project?',
    'What are the steps required to install your project?',
    'How do you reccomend the user to use your project?',
    'Which license did you utilize?',
    'What are your contribution guidelines?',
    'Write the tests for your application and provide examples on how to run them.',
    'What is your GitHub username?',
    'What is your email?'
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log(`Success!\nYou will find the README file in the ${data.title.split(' ').join('')} folder.`)
    );
}

// Function to initialize app
function init() {
    // Inquirer prompt method to ask user input
    inquirer.prompt([
        {
            type:'input',
            message:questions[0],
            name:'title',
        },
        {
            type:'input',
            message:questions[1],
            name:'description',
        },
        {
            type:'input',
            message:questions[2],
            name:'installation',
        },
        {
            type:'input',
            message:questions[3],
            name:'usage',
        },
        {
            type:'list',
            message:questions[4],
            name:'license',
            choices:['MIT License','Apache License 2.0','GNU GPLv3','Other/None'],
        },
        {
            type:'input',
            message:questions[5],
            name:'contributing',
        },
        {
            type:'input',
            message:questions[6],
            name:'tests'
        },
        {
            type:'input',
            message:questions[7],
            name:'username',
        },
        {
            type:'input',
            message:questions[8],
            name:'email',
        },
    ])
    .then((data) => {
        const dir = `./${data.title.split(' ').join('')}`;
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        const fileName = `./${data.title.split(' ').join('')}/README.md`;
        writeToFile(fileName,data);
    });
}

// Function call to initialize app
init();
