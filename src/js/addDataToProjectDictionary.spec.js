const { ORDER } = require("../constants/projectDictionaryAndOrder")
const addDataToProjectDictionary = require("./addDataToProjectDictionary");
const { returnTranslatedData } = require("./translateData");

jest.mock('./translateData');

describe('addDataToProjectDictionary', () => {
  it('it calls returnTranslatedData for each item in array', async () => {
    await addDataToProjectDictionary([1, 2, 3]);
    expect(returnTranslatedData).toHaveBeenCalledTimes(3);
    expect(returnTranslatedData).toHaveBeenCalledWith(1);
    expect(returnTranslatedData).toHaveBeenCalledWith(2);
    expect(returnTranslatedData).toHaveBeenCalledWith(3);
  })
})