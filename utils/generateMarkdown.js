// function to generate markdown for README
const renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `![Github license] (https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

const renderLicensLink = (license) => {
  if (license !== "None") {
    return `\n* [license](#license)\n`
  }
  return '';
}

function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

### Description

${data.description}

### Tabel Of Contents

* [installation](#installation)

* [usage](#usage)

${renderLicensLink(data.license)}

* [Contributing](#contributing)

* [Test](#test)

* [Questions](#questions)

## Installation

To install neccessary  dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License

This project is licensed under the ${data.license} license.  

## Contributing
${data.contributing}
## Tests

To run tests, run the following command: 

\`\`\`

${data.tests}

\`\`\`

## Questions

If you have any questions about the repo open an issues or contact me directly at ${data.email} 

You can find my work at [${data.Github}](https://github.com/${data.github}). 

`;
}

module.exports = generateMarkdown;
