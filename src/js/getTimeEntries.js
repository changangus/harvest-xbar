const getTimeEntries = async ({ projectId }) => {
  const { data : { time_entries }} = await axios.get(`https://api.harvestapp.com/v2/time_entries?project_id=${projectId}&per_page=1`, {
    headers: {
      'Authorization': `Bearer ${HARVEST_TOKEN}`,
      'Harvest-Account-Id': HARVEST_ACCOUNT_ID,
  }});

  return time_entries
}

module.exports = {
  getTimeEntries
}