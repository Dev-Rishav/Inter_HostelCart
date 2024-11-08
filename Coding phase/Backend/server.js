require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

//* Middleware
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//* Routes
app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);
app.use("/api/user",userRoutes);

app.get('/', (req, res) => {
  res.send('From backend');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//TODO[DONE]MVC
//TODO API enpoint for admin panel
//TODO userSchema updation for admin panel
//TODO dp attribute for userSchema
//TODO user cart control
