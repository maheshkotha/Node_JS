const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.send("Hello NODE");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

 