const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('is a function', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('returns undefined when not given a parameter', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('returns null when given a wrong string parameter', () => {
    expect(handlerElephants('test')).toBeNull();
  });
  it('returns the message Parâmetro inválido, é necessário uma string when given a parameter that is not a string', () => {
    expect(handlerElephants(5)).toBe('undefined');
  });
  it('counts and returns the correct amount of animals', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('returns an array of names when the names parameter is given', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('returns an integer with the average age of all elephants', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('returns the location of the elephants in the zoo', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('returns the popularity of the elephants', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('returns an array with the availability of the elephants', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
