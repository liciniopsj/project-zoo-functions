const data = require('../data/zoo_data');

const { employees } = data;
const managers = [];
employees.forEach((employee) => {
  managers.push(employee.managers);
});
const mergedManagersValues = [].concat(...managers);
const nonDuplicateManagerArray = [...new Set(mergedManagersValues)];

const findRelated = (id) => {
  const returnArray = [];
  employees.forEach((employee) => {
    if (employee.managers.some((managerId) => managerId === id)) {
      returnArray.push(`${employee.firstName} ${employee.lastName}`);
    }
  });
  return returnArray;
};

function isManager(id) {
  return nonDuplicateManagerArray.some((manager) => manager === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return findRelated(managerId);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
