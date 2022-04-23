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
        name: "repository",
        message: "What is the link of your repository?"
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
        choices: ["MIT", "ISC", "Mozilla", "GNU", "Boost"]
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
            fs.writeFileSync("./generated.md", generateReadme(data))
        })
    }

    init ();

function generateReadme (data) {
return `
# ${data.title}

![Badge](![GitHub language count](https://img.shields.io/github/languages/count/${data.username}/${data.repository})

## Description
${data.description}

## Table of Contents
* Installation
* Usage
* Credits
* Licenses
* Features
* Contribute
* Tests

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

## Questions? 
If you have any questions feel free to email me at ${data.email} or connect with me via my github at [${data.username}](${data.repository})

`
}