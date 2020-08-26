// function to generate markdown for README

function generateMarkdown(data) {

// badge
// image

  return `
  TITLE
  ${data.title}

  DESCRIPTION
  ${data.description}

  TABLE OF CONTENTS
  - [Installation]
  - [Usage]
  - [License]
  - [Tests]
  - [Contributors] 
  - [Questions]

  Installation
  ${data.installation}

  Usage
  ${data.usage}

  License
  ${data.license}

  Tests
  ${data.tests}

  Contributors
  ${data.contributing}

  Contact

  \n ${badge}
  \n ${image}
  \n (View the project in GitHub at: ${data.url})
  \n (Contact the author at ${data.email})

`;

}

module.exports = generateMarkdown;
