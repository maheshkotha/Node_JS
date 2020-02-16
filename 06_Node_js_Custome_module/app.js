const util = require('./admin/util');
const profile = require('./profile/profle');


util.greet('mahesh');

// profile.js
let users = [
    {
        name: 'mahesh',
        age: 25,
        designation: 'se'
    },
    {
        name: 'sai',
        age: 24,
        designation: 'se'
    },
    {
        name: 'geetha',
        age: 25,
        designation: 'Hr'
    }
];

profile.printUsers(users);