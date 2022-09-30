const data = require('../data/zoo_data');

const { prices } = data;

// const visitorArray = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const totalVisitors = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((visitor) => {
    if (visitor.age < 18) totalVisitors.child += 1;
    if (visitor.age >= 18 && visitor.age < 50) totalVisitors.adult += 1;
    if (visitor.age >= 50) totalVisitors.senior += 1;
  });
  return totalVisitors;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const visitors = countEntrants(entrants);
  let totalEntry = 0;
  totalEntry += visitors.child * prices.child;
  totalEntry += visitors.adult * prices.adult;
  totalEntry += visitors.senior * prices.senior;
  return totalEntry;
}
// console.log(calculateEntry(visitorArray));
module.exports = { calculateEntry, countEntrants };
