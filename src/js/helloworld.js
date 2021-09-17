const axios = require('axios');
const { HARVEST_TOKEN, HARVEST_ACCOUNT_ID } = require('../constants/harvestInfo');

const postDirectedLearningHours = async () => {
  try {
    const response = await axios.post(`https://api.harvestapp.com/v2/time_entries`, {
      headers: {
        'Authorization': `Bearer ${HARVEST_TOKEN}`,
        'Harvest-Account-Id': HARVEST_ACCOUNT_ID,
        'Content-Type': "application/json"
      },
      data: {"user_id":3855900,"project_id":3073688,"task_id":1819355,"spent_date":"2021-09-16","hours":1.0}
    })
  } catch (error) {
    console.log(error.message)
  }
};

postDirectedLearningHours();