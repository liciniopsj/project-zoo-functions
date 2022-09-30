const data = require('../data/zoo_data');

const { species } = data;
const findAnimal = (animal) => species.find((specimen) => specimen.name === animal);

function getAnimalsOlderThan(animal, age) {
  const match = findAnimal(animal);
  const { residents } = match;
  return residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
