const axios = require('axios');
const { HARVEST_TOKEN, HARVEST_ACCOUNT_ID } = require('../constants/harvestInfo');

const data = { 
  "user_id": 3855900, 
  "project_id": 3073688, 
  "task_id": 1819355, 
  "spent_date": "2021-09-21", 
  "hours": 1.0 
}
const postDirectedLearningHours = async () => {
  try {
    const response = await axios.post(`https://api.harvestapp.com/v2/time_entries`, data, {
      headers: {
        'Authorization': `Bearer 2719680.pt.8S1Yry48sFx_5qPZ4_a650DfG2Z4-_mwykp-uQTpWTVDttVS0CWxYah1wM_-mOdLNOdUpJ9QbdZFmap1UjgI_Q`,
        'Harvest-Account-Id': 266954,
        'Content-Type': "application/json"
      },
    });
    
  } catch (error) {
    console.log(error.message)
  }
};
console.log(process.env.HARVEST_TOKEN);
postDirectedLearningHours();