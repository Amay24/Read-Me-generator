const inquirer = require('inquirer')
const fs = require('fs')

//questions that are prompted to the user to create the read me
const readMeQuestions = [
        {
            type: "input",
            message: "What is the title for the project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please provide a project description:",
            name: "description"
        },
        {
            type: "input",
            message: "Enter installation insructions for this project:",
            name: "install"
        },
        {
            type: "input",
            message: "How this project can be used:",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter contribution guidelines:",
            name: "contribution"
        },
        {
            type: "input",
            message: "Enter test information:",
            name: "testing"
        },
        {
            type: "input",
            message: "Enter your GitHub Username:",
            name: "github"
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        },
        {
            type: "list",
            message: "Which license does this project use?",
            name: "license",
            choices: [
                "MIT License",
                "Apache License-2.0",
                "Gpl-3.0",
                "MPL-2.0",
                "Unlicensed"

            ]
        }
    ];

//read me structure where inputs are filled in

    const createReadme = ({title, description, install, usage, contribution, testing, github, email, license}) =>
    `# ${title}
    
    ## Description
   
    ${description}

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [Github](#github)
    * [License](#license)
    
    ## Installation

    _Here are the steps for installation:_

    ${install}

    ## Usage

    _Here are the instruction for using this application_

    ${usage}

    ## Github

    Please reach me at by email or GitHub should you have any questions.

    Github: [${github}](https://github.com/${github})

    Email: [${email}](mailto:${email})

    ## License

    _This applications uses the ${license} license._


    `

    const init = () => {
        inquirer.prompt(readMeQuestions)
            .then((data) => fs.writeFileSync("Readme.md", createReadme(data)))
            .then(() => console.log("It worked!"))
            .catch((error) => console.error(error));
    }
    
    init();