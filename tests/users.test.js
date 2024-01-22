// You already have the methods imported
const {getUserById, getUserByUsername, validatePassword} = require('../users.js');
const { default: expect } = require('expect');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

describe('User function test', () => {
    it('Should get the user by its id', () => {
        const user = getUserById(3);
        expect(user).toEqual({
            id: 3,
            username: 'goosemotionless',
            email: 'dotmeheart@outlook.com',
            password: '12345abcde',
        });
    });
});