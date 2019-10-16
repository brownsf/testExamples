import * as Utils from './Utils';

it('adds numbers', () => {
  const value = Utils.add(2, 2);
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  const floatingValue = 0.1 + 0.2;
  expect(floatingValue).toBeCloseTo(0.3);


  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);

  expect(Utils.add(1, 2)).toBe(3);
});

it('combines strings', () => {
  const value = Utils.add('first', 'Name');
  expect(value).toBe('firstName');
  expect(value).toEqual('firstName');
});


it('divides but really will throw an exepction', () => {
  const test = () => Utils.divide(1, 0);
  expect(test).toThrow();

  expect(test).toThrow('Cannot Divide By Zero');
  expect(test).toThrow(/Cannot/);
});
