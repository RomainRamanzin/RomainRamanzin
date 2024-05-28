const fs = require ('fs');
const readme = require ('./readme.js');

const today = new Date().toLocaleDateString('fr-FR');
const timestamp = new Date().toISOString();
const randomNumber = Math.floor(Math.random() * 100);


if (randomNumber > 60) {
  var readmeContent = readme.replace('<#today_date>', today);
  readmeContent += `\n<!-- Last updated: ${timestamp} -->`;
} else {
  console.log('Skipping readme upadate');
}



fs.writeFile('README.md', readmeContent, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});