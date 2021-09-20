#!/Users/anguswork/.nvm/versions/node/v16.8.0/bin/node

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { ORDER } = require('./constants/projectDictionaryAndOrder');
const { HARVEST_TOKEN, HARVEST_ACCOUNT_ID } = require('./constants/harvestInfo');
const { getTranslatedData } = require('./js/translateData');
const shellPath = '/Users/anguswork/desktop/xbar/harvest-xbar/src/scripts/';

const displayStartMenu = (project, translatedData) => {
  translatedData.isTimeTrackedToday ? 
  console.log(`-- Start | shell=${shellPath}/restartTimer.sh param1=${translatedData.timeEntryId} param2=${HARVEST_TOKEN} param3=${HARVEST_ACCOUNT_ID} | terminal=true`) 
  : console.log(`-- Start | shell=${shellPath}/startTimer.sh param1=${HARVEST_TOKEN} param2=${HARVEST_ACCOUNT_ID} param3=${project.projectId} param4=${project.taskId} param5=${new Date().toISOString().slice(0, 10)} | terminal=true`)
};

const displayProjectHoursAndMenu = async (project, translatedData) => {
  
  console.log(`${project.name} ${translatedData.isRunning ? '🕑' : ''}: ${translatedData.totalHoursTracked} hrs`);
  displayStartMenu(project, translatedData);
  console.log(`-- Stop | shell=${shellPath}/stopTimer.sh param1=${translatedData.timeEntryId} param2=${HARVEST_TOKEN} param3=${HARVEST_ACCOUNT_ID} | terminal=true`) 
};

const main = async () => {

  console.log('Harvest Hours');
  console.log('---');
  console.log(`${new Date()}`.slice(0,10));
  for(let project of ORDER) {
    const translatedData = await getTranslatedData(project)
    displayProjectHoursAndMenu(project, translatedData);
  }
};

main();
