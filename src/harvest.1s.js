#!/Users/anguswork/.nvm/versions/node/v16.8.0/bin/node

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { ORDER } = require('./constants/projectDictionaryAndOrder');
const { displayAllProjectHours } = require('./js/displayHours');

console.log('Last Recorded Hours');
console.log('---');
displayAllProjectHours(ORDER);
console.log('open | shell=/Users/anguswork/desktop/xbar/harvest-xbar/src/scripts/openDirectory.sh | terminal=true')