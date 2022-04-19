var inquirer = require("inquirer");
var questionList = [
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