require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const { Server } = require('socket.io');

const User = require('./models/userModel'); 

const app = express();
const server = require('http').createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
  }
});

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

   // Listen for user connection with userId
   socket.on('user_connected', ({ userId, token }) => {
    console.log(`User connected: ${userId}, token: ${token}`);

    // Fetch username from the database using userId
    User.findById(userId, (err, user) => {
      if (err) {
        console.error("Error fetching user:", err);
        return;
      }
      if (user) {
        // Emit the username back to the frontend
        socket.emit('username', { username: user.username });
        console.log('Username sent:', user.username);
      }
    });
  });


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
