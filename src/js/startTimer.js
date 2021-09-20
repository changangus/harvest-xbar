const axios = require('axios');
const { HARVEST_HEADERS } = require('../constants/harvestInfo');

const startTimer = async (data) => {
  try {
    const response = await axios.post(`https://api.harvestapp.com/v2/time_entries`, data, HARVEST_HEADERS);
    console.log('Timer Started')
  } catch (error) {
    console.log(error.message)
  }
};

module.exports = startTimer