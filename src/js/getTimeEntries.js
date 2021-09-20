const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const axios = require('axios');
const { HARVEST_HEADERS } = require('../constants/harvestInfo');

const getTimeEntries = async ({ projectId }) => {
  const { data : { time_entries }} = await axios.get(`https://api.harvestapp.com/v2/time_entries?project_id=${projectId}&per_page=1`, HARVEST_HEADERS);

  return time_entries
}

module.exports = {
  getTimeEntries
}