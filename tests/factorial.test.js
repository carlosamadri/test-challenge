const { default: expect } = require('expect');
const factorial = require('../factorial');

test('adds factorial', () => {
    expect(factorial(5)).toBe(120);
})