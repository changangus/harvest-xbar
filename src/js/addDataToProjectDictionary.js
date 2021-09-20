const { returnTranslatedData } = require('./translateData.js');

const addDataToProjectDictionary = async (projArr) => {
  for(let project of projArr) {
    project.translatedData = await returnTranslatedData(project)
  }

  return projArr;
};

module.exports = addDataToProjectDictionary;