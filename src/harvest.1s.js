#!/Users/anguswork/.nvm/versions/node/v16.8.0/bin/node

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { ORDER } = require('./constants/projectDictionaryAndOrder');
const addDataToProjectDictionary = require('./js/addDataToProjectDictionary');

const displayProjectHours = async (project, translatedData) => {
  
  console.log(translatedData.todaysDate);
  console.log(`${project.name}: ${translatedData.totalHoursTracked} hrs`);
  console.log('--')
};

const main = async () => {
  await addDataToProjectDictionary(ORDER);

  console.log('Last Recorded Hours');
  console.log('---');
  for(let project of ORDER) displayProjectHours(project, project.translatedData);
};

main();
