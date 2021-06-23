import { setName, getName } from '../util/PlayerNameUtil';

test("Default player name should be 'unnamed'", () => {
  expect(getName()).toBe('unnamed');
});

test("If name input field is empty name should be 'unnamed'", () => {
  setName('');
  expect(getName()).toBe('unnamed');
});

test('name must be a string', () => {
  expect(typeof getName()).toBe('string');
});

test('set player name', () => {
  setName('ilie');
  expect(getName()).toBe('ilie');
});

test('set a wrong player name', () => {
  setName(333);
  expect(getName()).toBe('unnamed');
});
