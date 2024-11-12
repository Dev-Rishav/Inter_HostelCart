require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const { Server } = require('socket.io');
//const mysql = require('mysql2');

//const User = require('./models/userModel'); 

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"]
  }
});

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to MySQL database!");
// });

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
app.use('/api/cart', cartRoutes);

app.get('/', (req, res) => {
  res.send('From backend');
});

// WebSocket connection
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
   
  // socket.on('user_connected', ({ userId }) => {
  //   console.log(`User connected with ID: ${userId}`);

  //   // Fetch username from MySQL database using userId
  //   const query = 'SELECT username FROM users WHERE id = ?';
  //   db.query(query, [userId], (err, results) => {
  //     if (err) {
  //       console.error("Error fetching username:", err);
  //       return;
  //     }
  //     if (results.length > 0) {
  //       const username = results[0].username;
  //       // Emit the username back to the frontend
  //       socket.emit('username', { username });
  //       console.log('Username sent:', username);
  //     } else {
  //       console.log('No user found with that ID');
  //     }
  //   });
  // });


  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room ${room}`);
  });

  socket.on('sendMessage', (message) => {
    io.to(message.room).emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
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
