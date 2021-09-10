#!/Users/anguswork/.nvm/versions/node/v16.8.0/bin/node
const axios = require('axios')

const HARVEST_TOKEN = '2719680.pt.8S1Yry48sFx_5qPZ4_a650DfG2Z4-_mwykp-uQTpWTVDttVS0CWxYah1wM_-mOdLNOdUpJ9QbdZFmap1UjgI_Q'; 
const HARVEST_ACCOUNT_ID = 266954;
const HARVEST_USER_ID = 3855900;
 
const PROJECT_DICTIONARY = {
  DIRECTED_LEARNING: {
    name: 'DIRECTED_LEARNING',
    projectId: 3073688,
    taskId: 1819355 
  },
  PAIRING: {
    name: 'PAIRING',
    projectId: 3073697,
    taskId: 1629017
  },
  GENERAL: {
    name: 'GENERAL',
    projectId: 3073665,
    taskId: 1819358 
  }
}

console.log('Last Recorded Hours')
console.log('---')

/**
 * Specific tasks
 * const DICTIONARY = {
 *   DIRECTED_LEARINING: {
 *     projectID: int,
 *     taskID: int,
 *   }
 * }
 * 
 * const ORDER = [
 *    dictionary.DIRECTED_LEARINING,
 *    dictionary.GENERAL_TIME
 * ]
 * 
 * const traslatedData = {
 *   DIRECTED_LEARINING: {
 *      dateLastTracked: string,
 *      totalHoursTrackedToday: int,
 *      isRunning: bool,
 *      isTimeTrackedToday: bool,
 *   },
 *   ...
 * 
 *   translationLayerFunction = (key, data) {
 *    traslatedData[key] = {
 *      dateLastTracked: string,
 *      totalHoursTrackedToday: getTotalTrackedHoursForTodaY(data),
 *      isRunning: data.timer_is_running,
 *      isTimeTrackedToday: bool,
 *    }
 *   }
 * }
 * 
 */
// getDirectedLearningTimeEntries();
// getGeneralTimeEntries();
// getPairingTimeEntries();

module.exports = {
  PROJECT_DICTIONARY
}