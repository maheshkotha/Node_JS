const  fs = require('fs');
const  path = require('path');

let printUsers = (users) => {
    users = JSON.stringify(users);
    fs.writeFile(path.join(__dirname, 'users.json'), users, 'utf-8', err => {
        if(err) throw err;
        console.log('data is saved');
    });
};

module.exports = { printUsers };