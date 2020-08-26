// requirers
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = ("./utils/generateMarkdown.js");


inquirer   
    .prompt([
        {
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
        choices: [
            "MIT",
            "APACHE2.0",
            "GPL3.0",
            "ISC"
        ]
        },
        {
        type: "input",
        name: "contributing",
        message: "What are the guidelines to making contributions to this application? "
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
    .then(function({username}){
        
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

        axios
        .get(queryUrl)
        .then(function(response){

            console.log("GitHub data: ", response.data);




            fs.writeFile("README.md", generateMarkdown(response), function(error){
                if(error){
                    throw error;
                }
                else{
                    console.log("This has been successful!");
                }
            })

    })
})



function init() {

}

init();




