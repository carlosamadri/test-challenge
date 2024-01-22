const { default: expect } = require('expect')
const conditions = require('../fizzBuzz.js')
const { number } = require('yargs')

test('adds number & divides', () => {
    expect(conditions(50)).toBe('Buzz');
})