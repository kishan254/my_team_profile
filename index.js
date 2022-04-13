const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const createHTML = require('./src/createHTML');
const path = require ('path');

const team = [];

//Questions for setting up the Manager Profile

const managerQuestions = [
    {
        type: 'input',
        message: 'What is the name of the Manager?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the ID of the Manager?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the email of the Manager?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the office line extention of the Manager?',
        name: 'officeNumber'
    },
]

//Questions for setting up the Engineer Profile

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the name of the Engineer?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the ID of the Engineer?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the email of the Engineer?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the Github of the Engineer?',
        name: 'github'
    },
]

//Questions for setting up the Intern Profile

const internQuestions = [
    {
        type: 'input',
        message: 'What is the name of the Intern?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the ID of the Intern?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the email of the Intern?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What school did the Intern go to?',
        name: 'school'
    },
]

// Questions to determine if the user is done adding employees or not

const employeeQuestion = [
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'choice',
        choices: ['Intern', 'Engineer','Done adding members']
    }
]

// Initial finction to be run to receive the manager's information

function getManager () {
    console.log('-------Manager Identification-------');
    inquirer.prompt(managerQuestions)
    .then (mAnswers => {
        const manager = new Manager (mAnswers.name, mAnswers.id, mAnswers.email, mAnswers.officeNumber, 'Manager');
        team.push(manager);
        getNextEmployee();
    })
}

// Function to be run to choose which employees to add, if none then end questions

function getNextEmployee() {
    inquirer.prompt(employeeQuestion)
    .then(function (data){
        switch (data.choice) {
            //Case for adding an intern
            case 'Intern':
                console.log('------- Intern Information -------');
                inquirer.prompt(internQuestions)
                .then(answers => {
                    const intern = new Intern(answers.name, answers.id, answers.school,'Intern');
                    team.push(intern);
                    console.log(intern);
                    getNextEmployee();
                });
                break;
                // Case for adding an engineer
                case 'Engineer':
                    console.log('-------- Engineer Information -------');
                    inquirer.prompt(engineerQuestions)
                    .then(answers => {
                        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github, 'Engineer');
                        team.push(engineer);
                        console.log(engineer);
                        getNextEmployee();
                    });
                    // Case for being done.
                    case 'Done adding members':
                        generatePage(team);
        }
    })
}

// Callback function to write the file

function writeToFile(fileName, data) {
    fs.writeFile(path.join(_dirname, fileName), data, function(err){
        if (err) throw err
        console.log('File Written!');
    })
}

// Function that generates the html page

function generatePage(team) {
    console.log ('Creating HTML...');
    const html = createHTML(team);
    return writeToFile('team.html', html);
}

getManager();