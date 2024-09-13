const mysql = require('mysql');
const express = require('express');
const app = express();

let db;

function handleDisconnect() {
    db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Str0ngP@ssw0rd!',
        database: 'InterHostelCart'
    });

    db.connect(err => {
        if (err) {
            console.error('Error connecting to database:', err);
            setTimeout(handleDisconnect, 2000); // Reconnect after 2 seconds
        }
    });

    db.on('error', err => {
        console.error('Database error:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect(); // Reconnect if connection is lost
        } else {
            throw err;
        }
    });
}

handleDisconnect();

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
