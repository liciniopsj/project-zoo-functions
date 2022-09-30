const data = require('../data/zoo_data');

const { species } = data;

const scheduleObj = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const workingDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const findDay = (day) => {
  const returnObj = {};
  returnObj[day] = scheduleObj[day];
  return returnObj;
};

const isOfficeDay = (day) => workingDays.includes(day);

const isAnimal = (animalName) => species.some((specimen) => specimen.name === animalName);

const findAnimal = (animal) => species.find((specimen) => specimen.name === animal);

const mondayMessage = () => {
  const Message = { Monday: { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' } };
  return Message;
};

function getSchedule(scheduleTarget) {
  if (isAnimal(scheduleTarget)) return findAnimal(scheduleTarget).availability;
  if (isOfficeDay(scheduleTarget)) return findDay(scheduleTarget);
  if (scheduleTarget === 'Monday') return mondayMessage();
  return scheduleObj;
}

const teste = findDay('Tuesday');
console.log(teste);
module.exports = getSchedule;
