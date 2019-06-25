import { tondeuses } from './tondeuses.js'


const listeTondeuses = [
    {coins: "5 5", x: 1, y: 2, p : "N", code : "GAGAGAGAA"},
    {x: 3, y: 3, p : "E", code : "AADAADADDA"}];

describe('Tondeuses', () => {
  describe('Differents cas', () => {
    test('Si 1 2 N avec GAGAGAGAA et 3 3 E avec AADAADADDA sur une pelouse de 5*5', () => {
      expect(tondeuses(listeTondeuses)).toEqual("1 3 N;5 1 E;");
    });
  });
});