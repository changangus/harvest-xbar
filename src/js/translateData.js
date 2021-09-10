const getIsTimeTrackedToday = (time_entries) => {
  const { spent_date } = time_entries;
  const today = `${new Date()}`.slice(0, 10);

  return spent_date === today 
}

module.exports = {
  getIsTimeTrackedToday
}