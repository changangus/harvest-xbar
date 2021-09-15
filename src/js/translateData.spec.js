const { PROJECT_DICTIONARY } = require("../constants/projectDictionaryAndOrder");
const { mockDirectedLearningResponse, mockPairingResponse, mockGeneralResponse } = require("../data/mockData")
const { getIsTimeTrackedToday, getTotalTrackedHoursForToday, translateData } = require("./translateData")

describe('getIsTimeTracked', () => {
  it('returns true', () => {
    const today = new Date().toISOString().slice(0, 10);
    expect(getIsTimeTrackedToday([{ spent_date: today}])).toBe(true);
  })
  it('returns false', () => {
    const {time_entries} = mockDirectedLearningResponse
    expect(getIsTimeTrackedToday(time_entries)).toBe(false);
  })
});

describe('getTotalTrackedHoursForTdoay', () => {
  it('returns 0', () => {
    const {time_entries} = mockDirectedLearningResponse;
    expect(getTotalTrackedHoursForToday(time_entries)).toBe(0) 
  })
  it('returns the hours logged for today', () =>{
    const today = new Date().toISOString().slice(0, 10);
    const mockTimeEntry = [{ spent_date: today, hours: 6.0 }];
    expect(getTotalTrackedHoursForToday(mockTimeEntry)).toBe(6.0);
  })
})

describe('translateData', () => {
  it('returns a translated object from our directed learning response', () => {
    const { time_entries } = mockDirectedLearningResponse;
    expect(translateData(time_entries, PROJECT_DICTIONARY.DIRECTED_LEARNING)).toStrictEqual({
        todaysDate: `${new Date()}`.slice(0,10),
        isTimeTrackedToday: false,
        isRunning: false,
        totalHoursTracked: 0,
        projectId: 3073688,
        taskId: 1819355
      })
  })
  it('returns a translated object from our pairing response', () => {
    const { time_entries } = mockPairingResponse;
    expect(translateData(time_entries, PROJECT_DICTIONARY.PAIRING)).toStrictEqual({
        todaysDate: `${new Date()}`.slice(0,10),
        isTimeTrackedToday: false,
        isRunning: false,
        totalHoursTracked: 0,
        projectId: 3073697,
        taskId: 1629017
      })
  })
  it('returns a translated object from our general response', () => {
    const { time_entries } = mockGeneralResponse;
    expect(translateData(time_entries, PROJECT_DICTIONARY.GENERAL)).toStrictEqual({
        todaysDate: `${new Date()}`.slice(0,10),
        isTimeTrackedToday: false,
        isRunning: false,
        totalHoursTracked: 0,
        projectId: 3073665,
        taskId: 1819358 
      })
  })
})