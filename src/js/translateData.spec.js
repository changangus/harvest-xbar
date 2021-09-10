const { mockResponse } = require("./mockData")
const { getIsTimeTrackedToday } = require("./translateData")

describe('getIsTimeTracked', () => {
  it('returns true', () => {
    const today = `${new Date()}`.slice(0,10);
    expect(getIsTimeTrackedToday({ spent_date: today})).toBe(true);
  })
  it('returns false', () => {
    const {time_entries} = mockResponse
    expect(getIsTimeTrackedToday(time_entries)).toBe(false);
  })
})