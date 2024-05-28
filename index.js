const fs = require ('fs');
const readme = require ('./readme.js');

const today = new Date().toLocaleDateString('fr-FR');
const timestamp = new Date().toISOString();
const randomNumber = Math.floor(Math.random() * 100);


if (randomNumber > 60) {
  let readmeContent = readme.replace('<#today_date>', today);
  readmeContent += `\n<!-- Last updated: ${timestamp} -->`;

  // Write the new README.md file
  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
} else {
  console.log('Skipping readme update');
}