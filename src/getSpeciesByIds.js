const data = require('../data/zoo_data');

const { species } = data;
const findId = (id) => species.find((specie) => specie.id === id);

function getSpeciesByIds(...ids) {
  const matchedIdArray = [];
  ids.forEach((id) => {
    matchedIdArray.push(findId(id));
  });
  return matchedIdArray;
}
module.exports = getSpeciesByIds;
