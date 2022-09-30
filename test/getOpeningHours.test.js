const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const expectedToBeClosed = 'The zoo is closed';
  it('is a function', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('it returns The zoo is closed when given the following parameters - Monday , 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(expectedToBeClosed);
  });
  it('it returns The zoo is open when given the following parameters - Tuesday , 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('it returns The zoo is closed when given the following parameters - Wednesday , 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(expectedToBeClosed);
  });
  it('it returns an error message when given an invalid hour paramater', () => {
    expect(() => getOpeningHours('Wednesday', '13:00-PM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('it returns an error message when given an invalid minute paramater', () => {
    expect(() => getOpeningHours('Wednesday', '09:60-PM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
  it('it returns an error message when given an invalid AM-PM paramater', () => {
    expect(() => getOpeningHours('Wednesday', '09:00-TM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('it returns an error message when given an invalid day paramater', () => {
    expect(() => getOpeningHours('Nopeday', '12:00-PM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('invalid hour parameter', () => {
    expect(() => getOpeningHours('Wednesday', 'xx:00-PM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('invalid minute parameter', () => {
    expect(() => getOpeningHours('Wednesday', '12:xx-PM')).toThrowError(new Error('The minutes should represent a number'));
  });
  it('No paramaters', () => {
    const expected = {
      Friday: { close: 8, open: 10 },
      Monday: { close: 0, open: 0 },
      Saturday: { close: 10, open: 8 },
      Sunday: { close: 8, open: 8 },
      Thursday: { close: 8, open: 10 },
      Tuesday: { close: 6, open: 8 },
      Wednesday: { close: 6, open: 8 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('fix 12 PM hour parameter', () => {
    expect(getOpeningHours('Wednesday', '12:00-PM')).toBe('The zoo is open');
  });
  it('fix 12 AM hour parameter', () => {
    expect(getOpeningHours('Wednesday', '12:00-AM')).toBe(expectedToBeClosed);
  });
  it('fix 12 PM hour parameter on Mondays', () => {
    expect(getOpeningHours('Monday', '12:00-PM')).toBe(expectedToBeClosed);
  });
  it('fix 12 AM hour parameter on Mondays', () => {
    expect(getOpeningHours('Monday', '12:00-AM')).toBe(expectedToBeClosed);
  });
});

// .toThrowError(new Error());
