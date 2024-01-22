// Imports small array of users
// Pretend it's an API request
const users = require('./data.js');

// Fetches all users

// Filters users by specific ID
function getUserById(id) {
    return users.find(user => user.id === id);
}

function getUserByUsername(username) {
    return users.find(user => user.username === username);
}

function validatePassword(userId, password){
    const user = getUserById(id);
    return user ? user.password === password : false;
}


// test
// console.log(getUser(3));

module.exports = {getUserById , getUserByUsername, validatePassword};