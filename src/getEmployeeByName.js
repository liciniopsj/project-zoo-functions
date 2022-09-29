const data = require('../data/zoo_data');

const { employees } = data;

const findEmployeeByName = (employeeName) => {
  const match = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return match;
};

function getEmployeeByName(employeeName) {
  const employee = {};
  Object.assign(employee, findEmployeeByName(employeeName));
  return employee;
}

console.log(typeof findEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
