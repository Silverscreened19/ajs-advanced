import orderByProps from '../app';

test('orderByProps function with initial props', () => {
  const character = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = orderByProps(character, ['name', 'level']);
  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }]);
});

test('orderByProps function with aditional props', () => {
  const character = {
    name: 'Jane', lastName: 'Doe', age: 25, sex: 'female', occupation: 'finance',
  };
  const result = orderByProps(character, ['occupation', 'lastName', 'age']);
  expect(result).toEqual([
    { key: 'lastName', value: 'Doe' },
    { key: 'age', value: 25 },
    { key: 'occupation', value: 'finance' },
    { key: 'name', value: 'Jane' },
    { key: 'sex', value: 'female' }]);
});

test('orderByProps function with no props', () => {
  const character = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = orderByProps(character, []);
  expect(result).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' }]);
});
