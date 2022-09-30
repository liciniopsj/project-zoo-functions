const data = require('../data/zoo_data');

const { species } = data;
const TotalAnimalCount = () => {
  const animalCount = {};
  species.forEach((specimen) => {
    animalCount[specimen.name] = specimen.residents.length;
  });
  return animalCount;
};

const animalCountByName = (specie) => {
  let counter = 0;
  species.forEach((specimen) => {
    if (specimen.name === specie) {
      counter = specimen.residents.length;
    }
  });
  return counter;
};

const findAnimal = (animal) => species.find((specimen) => specimen.name === animal);

const animalCountByNameAndSex = (specie, sex) => {
  let count = 0;
  const specimenMatch = findAnimal(specie);
  specimenMatch.residents.forEach((specimen) => {
    if (specimen.sex === sex) count += 1;
  });
  return count;
};

function countAnimals({ specie = '', sex = '' } = {}) {
  if (specie === '' && sex === '') return TotalAnimalCount();
  if (specie !== '' && sex === '') return animalCountByName(specie);
  return animalCountByNameAndSex(specie, sex);
}

// console.log(animalCountByNameAndSex('lions', 'male'));
module.exports = countAnimals;
