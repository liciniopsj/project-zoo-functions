const data = require('../data/zoo_data');

const { employees, species } = data;
const allEmployees = [
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    fullName: 'Nigel Nelson',
    species: ['lions', 'tigers'],
    locations: ['NE', 'NW'],
  },
  {
    id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
    fullName: 'Burl Bethea',
    species: ['lions', 'tigers', 'bears', 'penguins'],
    locations: ['NE', 'NW', 'NW', 'SE'],
  },
  {
    id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    fullName: 'Ola Orloff',
    species: ['otters', 'frogs', 'snakes', 'elephants'],
    locations: ['SE', 'SW', 'SW', 'NW'],
  },
  {
    id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
    fullName: 'Wilburn Wishart',
    species: ['snakes', 'elephants'],
    locations: ['SW', 'NW'],
  },
  {
    id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
    fullName: 'Stephanie Strauss',
    species: ['otters', 'giraffes'],
    locations: ['SE', 'NE'],
  },
  {
    id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
    fullName: 'Sharonda Spry',
    species: ['otters', 'frogs'],
    locations: ['SE', 'SW'],
  },
  {
    id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
    fullName: 'Ardith Azevado',
    species: ['tigers', 'bears'],
    locations: ['NW', 'NW'],
  },
  {
    id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
    fullName: 'Emery Elser',
    species: ['lions', 'bears', 'elephants'],
    locations: ['NE', 'NW', 'NW'],
  },
];

const findSpeciesById = (id) => species.find((specimen) => specimen.id === id);

const findById = (id) => employees.find((employee) => employee.id === id);

const findByName = (name) => employees
  .find((employee) => employee.firstName === name || employee.lastName === name);

const buildSpeciesKey = (specimenIdArray) => {
  const animalNames = [];
  specimenIdArray.forEach((element) => {
    animalNames.push(findSpeciesById(element).name);
  });
  return animalNames;
};

const buildLocationsKey = (specimenIdArray) => {
  const animalLocations = [];
  specimenIdArray.forEach((element) => {
    animalLocations.push(findSpeciesById(element).location);
  });
  return animalLocations;
};

function buildReturnObjByName(employeeName) {
  const returnObj = {};
  const employee = findByName(employeeName);

  returnObj.id = employee.id;
  returnObj.fullName = `${employee.firstName} ${employee.lastName}`;
  returnObj.species = buildSpeciesKey(employee.responsibleFor);
  returnObj.locations = buildLocationsKey(employee.responsibleFor);
  return returnObj;
}

function buildReturnObjById(id) {
  const returnObj = {};
  const employee = findById(id);

  returnObj.id = employee.id;
  returnObj.fullName = `${employee.firstName} ${employee.lastName}`;
  returnObj.species = buildSpeciesKey(employee.responsibleFor);
  returnObj.locations = buildLocationsKey(employee.responsibleFor);
  return returnObj;
}

const isIdInvalid = (id) => {
  if (findById(id) === undefined) throw new Error('Informações inválidas');
};

const isNameInvalid = (name) => {
  if (findByName(name) === undefined) throw new Error('Informações inválidas');
};

function getEmployeesCoverage({ name = undefined, id = undefined } = {}) {
  if (name === undefined && id !== undefined) {
    isIdInvalid(id);
    return buildReturnObjById(id);
  }
  if (name !== undefined && id === undefined) {
    isNameInvalid(name);
    return buildReturnObjByName(name);
  }
  return allEmployees;
}

console.log(species.find((specimen) => specimen.id === 'balls'));
module.exports = getEmployeesCoverage;
