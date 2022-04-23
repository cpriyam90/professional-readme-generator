//*Citations/Credits*
//Tutor Abdullah explained what inquirer is and how to install inquirer package on my repo
//TA Charlie explained how customizable shields.io is for badges
//Shields.io for generating license badges
//license information found on https://choosealicense.com/licenses/
//Professional readme guide found on this link shared in assignment instructions https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

var inquirer = require("inquirer");
var fs = require("fs");
var questionList = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your ReadMe?"
    },
    {
        type: "input",
        name: "description",
        message: "Type the description of your application."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed."
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles."
    },
    {
        type: "list",
        name: "licenses",
        message: "Choose your license.",
        choices: ["MIT", "Boost_1.0", "Apache_2.0", "Mozilla"]
    },
    {
        type: "input",
        name: "features",
        message: "If your project has a lot of features, list them here."
    },
    {
        type: "input",
        name: "contribute",
        message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so."
    },
    {
        type: "input",
        name: "tests",
        message: "write tests for your application. Then provide examples on how to run them here."
    },


]
    function init () {
        inquirer.prompt(questionList)
        .then(function (data) {
            console.log(data)
            fs.writeFileSync("./generatedReadme.md", generateReadme(data))
        })
    }

    init ();

function generateReadme (data) {
return `
# ${data.title}

[![License](https://img.shields.io/badge/License-${data.licenses}-green)](https://choosealicense.com/licenses/)

## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [Licenses](#Licenses)
* [Features](#Features)
* [Contribute](#Contribute)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Licenses
${data.licenses}

## Features
${data.features}

## Contribute
${data.contribute}

## Tests
${data.tests}

## Questions
If you have any questions feel free to email me at ${data.email} or connect with me via my github at [${data.username}](https://github.com/${data.username})

`
}