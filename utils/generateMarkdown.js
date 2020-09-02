// function to generate markdown for README

function generateMarkdown(data) {
console.log("data in generateMarkdown", data);


  return `
  # TITLE: ${data.title}
  \n ${data.license}

  ## DESCRIPTION:
  ${data.description}

  ## TABLE OF CONTENTS:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [License](#license)
  - [Contributors](#contributors)
  - [Questions](#questions)
 


  ## INSTALLATION:
  ${data.installation}

 ## USAGE:
  ${data.usage}

 ## TESTS:
  ${data.tests}

## LICENSE:
  ${data.license}

 ## CONTRIBUTORS:
  ${data.contributors}

  ## QUESTIONS:
  ${data.questions}

  \n Contact the author at ${data.email}
  \n View the project in GitHub at: ${data.url}
  \n View demo video at : https://youtu.be/-aKSW7OlcAA
 
  \n <img src="${data.avatar}"/>




`;
}

module.exports = generateMarkdown;
