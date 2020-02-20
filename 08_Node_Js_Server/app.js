const http = require('http');
const fs = require('fs');
const path = require('path');

const hostName = '127.0.0.1';
const port = 3000;

let server = http.createServer((request, response) =>{
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    let url = request.url;
    if (url == '/'){
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        });
    }
    else if (url == '/about') {
        fs.readFile(path.join(__dirname, 'about.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        });
    }
    else  if (url == '/service') {
        fs.readFile(path.join(__dirname, 'services.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        });
    }
    else if (url == '/contact') {
        fs.readFile(path.join(__dirname, 'contact.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        });
    } else  {
        fs.readFile(path.join(__dirname, 'error.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        });
    }
});

server.listen(port, hostName, ()=> {
    console.log('server running');
});