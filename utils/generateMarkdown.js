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



`;
}

module.exports = generateMarkdown;
