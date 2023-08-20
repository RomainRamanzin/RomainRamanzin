const fs = require ('fs');
const readme = require ('./readme.js');

const today = new Date().toLocaleDateString('fr-FR');

const readmeContent = readme.replace('<#today_date>', today);

fs.writeFile('README.md', readmeContent, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});