const getIsTimeTrackedToday = (time_entries) => {
  const { spent_date } = time_entries;
  const today = `${new Date()}`.slice(0, 10);

  return spent_date === today 
}

const getTotalTrackedHoursForToday = (time_entries) => {
  const { hours } = time_entries;
  return getIsTimeTrackedToday(time_entries) ? hours : 0;
}

module.exports = {
  getIsTimeTrackedToday,
  getTotalTrackedHoursForToday
}