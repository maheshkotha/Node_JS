const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.send("Hello NODE");
});

app.get('/logout', (req, res) => {
    res.send("Your are loged out");
});

app.get('/signup', (req, res) => {
    res.send("You are visited sign up route");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

 
