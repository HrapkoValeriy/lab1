const { expect } = require('chai');
const Mtrx = require('../mtrx'); // або './mtrx'

describe('Матричні операції', function() {
  it('має правильно додавати дві матриці', function() {
    const a = [[1, 2], [3, 4]];
    const b = [[5, 6], [7, 8]];
    const result = Mtrx.add(a, b);
    expect(result).to.deep.equal([[6, 8], [10, 12]]);
  });

  // Додайте ще тесті для інших функцій
});

before(() => {
  // виконується один раз перед усіма тестами
});

beforeEach(() => {
  // виконується перед кожним тестом
});

afterEach(() => {
  // пост-тестові дії
});

after(() => {
  // після всіх тестів
});