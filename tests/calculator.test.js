const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect(calculator.sum(2, 2)).toBe(4);
})

test('substracts a - b', () => {
   expect(calculator.substract(8, 4)).toBe(4);
})

test('multiplies a * b', () => {
    expect(calculator.multiply(5, 6)).toBe(30);
})

test('divides a / b', () => {
    expect(calculator.divide(20, 4)).toBe(5);
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(3,2)).toBe(9);
})

