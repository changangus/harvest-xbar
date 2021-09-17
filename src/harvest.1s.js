#!/Users/anguswork/.nvm/versions/node/v16.8.0/bin/node

// <xbar.var>string(DIRECTORY="/"): directory.</xbar.var>
// <xbar.var>(TODAY=`date +%Y-%m-%d`)</xbar.var>
// 
// 
// 
// 
// 


const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { HARVEST_TOKEN } = require('./constants/harvestInfo');
const { ORDER } = require('./constants/projectDictionaryAndOrder');
const { displayAllProjectHours } = require('./js/displayHours');

console.log('Last Recorded Hours');
console.log('---');
displayAllProjectHours(ORDER);
console.log('open | shell=/Users/anguswork/desktop/xbar/harvest-xbar/src/scripts/openDirectory.sh | terminal=true')