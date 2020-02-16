// fs module
const fs = require('fs');

// path module
const path = require('path');
// __dirname is aglobal directory name
console.log(`path`,__dirname);
//  __filename
console.log(`fileName: ${__filename}`);

let dirPath = path.join(__dirname, 'data');
console.log(`Directory Path : ${dirPath}`);

// create a file inside data/employee folder
let nestedPath = path.join(__dirname, 'data', 'employee', 'data.txt');
let fileContent = 'Good morning';

fs.writeFile(nestedPath, fileContent, 'utf-8', err => {
   if (err) throw err
    console.log('data save');
});

// read the app.js file content and write to program.txt in employee folder
fs.readFile(path.join(__dirname, 'app.js'), 'utf-8', (err, data) => {
    if (err) throw err;
    fs.writeFile(path.join(__dirname, 'data', 'employee', 'program.txt'),data, 'utf-8', (err) => {
        if (err) throw  err;
        console.log('data is saved');
    })
});