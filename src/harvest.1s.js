#!/Users/anguswork/.nvm/versions/node/v16.8.0/bin/node
const axios = require('axios');
const { displayAllProjectHours } = require('./js/displayAllProjectsHours');

const PROJECT_DICTIONARY = {
  DIRECTED_LEARNING: {
    name: 'Directed Learning',
    projectId: 3073688,
    taskId: 1819355 
  },
  PAIRING: {
    name: 'Pairing',
    projectId: 3073697,
    taskId: 1629017
  },
  GENERAL: {
    name: 'General Time',
    projectId: 3073665,
    taskId: 1819358 
  }
}

const ORDER = [
  PROJECT_DICTIONARY.DIRECTED_LEARNING,
  PROJECT_DICTIONARY.GENERAL,
  PROJECT_DICTIONARY.PAIRING
]

console.log('Last Recorded Hours');
console.log('---');
displayAllProjectHours(ORDER);

module.exports = {
  PROJECT_DICTIONARY
}