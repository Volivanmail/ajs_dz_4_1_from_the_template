import healthLevel from '../app';

const dataList = [
  ['мечник', { health: 10 }, 'critical'],
  ['маг', { health: 30 }, 'wounded'],
  ['лучник', { health: 80 }, 'healthy'],
];

const handler = test.each(dataList);

handler('testing health level function with %s name and %o character', (name, character, expected) => {
  const result = healthLevel(character);
  expect(result).toBe(expected);
});
