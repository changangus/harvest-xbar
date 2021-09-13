const axios = require('axios');

const HARVEST_TOKEN = '2719680.pt.8S1Yry48sFx_5qPZ4_a650DfG2Z4-_mwykp-uQTpWTVDttVS0CWxYah1wM_-mOdLNOdUpJ9QbdZFmap1UjgI_Q'; 
const HARVEST_ACCOUNT_ID = 266954;
const HARVEST_USER_ID = 3855900

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