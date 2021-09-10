const { mockResponse } = require("./mockData")
const { getIsTimeTrackedToday, getTotalTrackedHoursForToday } = require("./translateData")

describe('getIsTimeTracked', () => {
  it('returns true', () => {
    const today = `${new Date()}`.slice(0,10);
    expect(getIsTimeTrackedToday({ spent_date: today})).toBe(true);
  })
  it('returns false', () => {
    const {time_entries} = mockResponse
    expect(getIsTimeTrackedToday(time_entries)).toBe(false);
  })
});

describe('getTotalTrackedHoursForTdoay', () => {
  it('returns 0', () => {
    const {time_entries} = mockResponse;
    expect(getTotalTrackedHoursForToday(time_entries)).toBe(0) 
  })
  it('returns the hours logged for today', () =>{
    const today = `${new Date()}`.slice(0,10);
    const mockTimeEntry = { spent_date: today, hours: 6.0 };
    expect(getTotalTrackedHoursForToday(mockTimeEntry)).toBe(6.0);
  })
})