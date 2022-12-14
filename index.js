const inquirer = require('inquirer');
const classes = require("./lib/employee");
const generateHTML = require('./src/generatehtml');
const fs = require('fs');
let manager = "";
let team = [];
let internInfo = "";
let engineerInfo = "";

function createFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

const intern = () => {inquirer.prompt([
    {
        type: 'input',
        message: `Intern's Name`,
        name: 'name',
    },
    {
        type: `input`,
        message: `Intern's ID`,
        name: `id`,
    },
    {
        type: `input`,
        message: `Intern's Email`,
        name: `email`,
    },
    {
        type: `input`,
        message: `Intern's School`,
        name: `school`, 
    },
    {
        type: `list`,
        message: `Add another team member?`,
        choices: [`Engineer`, `Intern`, `Team is complete`],
        name: `next`
    }
])
  .then((response) => {switch (response.next) {
    case "Engineer":
        internInfo = new classes.intern(response.name, response.id, response.email, response.school);
        team.push(internInfo)
        engineer();
        break;
    case `Intern`: 
        internInfo = new classes.intern(response.name, response.id, response.email, response.school);
        team.push(internInfo)
        intern();
        break; 
    case "Team is complete":
        internInfo = new classes.intern(response.name, response.id, response.email, response.school);
        team.push(internInfo)
        const data = generateHTML.generateHTML(manager, team)
        const file = "./dist/index.html";
        createFile(file, data);
  }
 
    
  });

  };

  const engineer = () => {inquirer.prompt([
    {
        type: 'input',
        message: `Engineer's Name`,
        name: 'name',
    },
    {
        type: `input`,
        message: `Engineer's ID`,
        name: `id`,
    },
    {
        type: `input`,
        message: `Engineer's Email`,
        name: `email`,
    },
    {
        type: `input`,
        message: `Engineer's Github Username`,
        name: `github`, 
    },
    {
        type: `list`,
        message: `Add another team member?`,
        choices: [`Engineer`, `Intern`, `Team is complete`],
        name: `next`
    }
])
  .then((response) => {switch (response.next) {
    case "Engineer":
        engineerInfo = new classes.engineer(response.name, response.id, response.email, response.github);
        team.push(engineerInfo);
        engineer();
        break;
    case `Intern`:
        engineerInfo = new classes.engineer(response.name, response.id, response.email, response.github);
        team.push(engineerInfo);
        intern();
        break; 
    case "Team is complete":
        engineerInfo = new classes.engineer(response.name, response.id, response.email, response.github);
        team.push(engineerInfo);
        const data = generateHTML.generateHTML(manager, team)
        const file = "./dist/index.html";
        createFile(file, data);
  }
 
    
  });

  };

const init = () => {inquirer.prompt([
    {
        type: 'input',
        message: `Manager's Name`,
        name: 'name',
    },
    {
        type: `input`,
        message: `Manager's ID`,
        name: `id`,
    },
    {
        type: `input`,
        message: `Manager's Email`,
        name: `email`,
    },
    {
        type: `input`,
        message: `Manager's office number`,
        name: `office`, 
    },
    {
        type: `list`,
        message: `Add another team member?`,
        choices: [`Engineer`, `Intern`, `Team is complete`],
        name: `next`
    }
])
  .then((response) => {switch (response.next) {
    case "Engineer":
        manager = new classes.managers(response.name, response.id, response.email, response.office);
        engineer();
        break;
    case `Intern`:
        manager = new classes.managers(response.name, response.id, response.email, response.office);
        intern();
        break; 
    case "Team is complete":
        manager = new classes.managers(response.name, response.id, response.email, response.office);
        const data = generateHTML.generateHTML(manager, team)
        console.log(manager);
        const file = "./dist/index.html";
        createFile(file, data);
  }

  });

  };

  init();
  