const { getTimeEntries } = require('./getTimeEntries.js')

const getIsTimeTrackedToday = (time_entries) => {
  const { spent_date } = time_entries[0];
  const today = new Date().toISOString().slice(0, 10);
  
  return spent_date === today 
}

const getTotalTrackedHoursForToday = (time_entries) => {
  const { hours } = time_entries[0];
  return getIsTimeTrackedToday(time_entries) ? hours : 0;
}

const translateData = (time_entries) => ({
    timeEntryId: time_entries[0].id,
    todaysDate: `${new Date()}`.slice(0,10),
    isTimeTrackedToday: getIsTimeTrackedToday(time_entries),
    isRunning: time_entries[0].is_running,
    totalHoursTracked: getTotalTrackedHoursForToday(time_entries),
})

const getTranslatedData = async (project) => {
  const timeEntries = await getTimeEntries(project);
  const translatedData = translateData(timeEntries);
  return translatedData; 
};

module.exports = {
  getIsTimeTrackedToday,
  getTotalTrackedHoursForToday,
  translateData,
  getTranslatedData
}