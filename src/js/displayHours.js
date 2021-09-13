const { getTimeEntries } = require("./getTimeEntries");
const { translateData } = require("./translateData");

const displayProjectHours = async (project) => {
  
  const timeEntries = await getTimeEntries(project);
  const translatedData = await translateData(timeEntries, project);
  
  console.log(translatedData.todaysDate);
  console.log(`${project.name}: ${translatedData.totalHoursTracked} hrs`);
  console.log('--')
};

const displayAllProjectHours = (projects) => {
  for(let project of projects) displayData(project);
};

module.exports = {
  displayProjectHours,
  displayAllProjectHours
}