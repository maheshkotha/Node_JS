const fs = require('fs');

// fs module example
// create data.txt and add text 'Good Morning'
fs.writeFile('message.txt', 'Good Morning','utf-8', err => {
    if (err) {
        err;
    }
    console.log('data is saved');
});

// read a file content
fs.readFile('message.txt', 'utf-8', (err, data) => {
    if (err) throw  err;
    console.log(data);
});

