// requirers
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");


inquirer
    .prompt([{
            type: "input",
            name: "username",
            message: "What is your GitHub username? "
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address? "
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your application? "
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of your application. "
        },
        {
            type: "input",
            name: "table of contents",
            message: "List your table of contents."
        },
        {
            type: "input",
            name: "installation",
            message: "Provide installation instructions. "
        },
        {
            type: "input",
            name: "usage",
            message: "What will your application used for? "

        },
        {
            type: "list",
            name: "license",
            message: "Choose licensing for your application. ",
            choices: [{
                    name: "Boost 1.0",
                    value: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
                },
                {
                    name: "APACHE 2.0",
                    value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                },
                {
                    name: "BSD 3-Clause",
                    value: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
                }
            ]
        },
        {
            type: "input",
            name: "contributors",
            message: "Who has contributed to this applicaton? "
        },
        {
            type: "input",
            name: "tests",
            message: "Provide testing instructions. "

        },
        {
            type: "input",
            name: "questions",
            message: "How do you report issues? Do you have any questions?"
        }
    ])
    .then(function (data) {
        console.log(data)
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios
            .get(queryUrl)
            .then(function (response) {

                console.log("GitHub data: ", response.data);





                fs.writeFile("README.md", generateMarkdown({...data, avatar: response.data.avatar_url, url: response.data.html_url}), function (error) {
                    if (error) {
                        throw error;
                    } else {
                        console.log("This has been successful!");
                    }
                })

            })
    })



function init() {

}

init();