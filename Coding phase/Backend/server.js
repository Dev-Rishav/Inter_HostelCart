const express = require('express');
const app = express();
const db= require('./connection');

app.get('/', (req, res) => {
    res.send("From backend");
});

app.get('/products', (req, res) => {
    const sqlSelect = "SELECT * FROM products";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            return res.json({ error: err });
        }
        res.send(result);
    });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
