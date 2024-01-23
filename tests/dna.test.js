const { default: expect } = require('expect');
const adn = require('../dna.js');

test('DNA String filter', () => {
    expect(adn('AHFGORNVmhyuwTTACG')).toEqual('AGTTACG');
})