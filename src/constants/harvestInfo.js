const HARVEST_TOKEN = process.env.HARVEST_TOKEN; 
const HARVEST_ACCOUNT_ID = process.env.HARVEST_ACCOUNT_ID;
const HARVEST_USER_ID = process.env.HARVEST_USER_ID;
const HARVEST_HEADERS = {
  headers: {
    'Authorization': `Bearer ${HARVEST_TOKEN}`,
    'Harvest-Account-Id': HARVEST_ACCOUNT_ID,
    'Content-Type': "application/json"
  },
}

module.exports = {
  HARVEST_HEADERS,
  HARVEST_TOKEN,
  HARVEST_ACCOUNT_ID,
  HARVEST_USER_ID
};
