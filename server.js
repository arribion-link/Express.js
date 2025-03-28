const e = require('express');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("<h1>HOME PAGE</h1>");
});

app.listen(3000, () => {
    console.log(`app running on http://localhost:3000`);
});