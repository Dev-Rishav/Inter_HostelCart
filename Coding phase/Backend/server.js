const express= require('express');
const  mysql = require('mysql');
const cors= require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("From backend");
}
)

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
