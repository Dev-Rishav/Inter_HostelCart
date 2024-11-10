require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

const { Server } = require('socket.io');

const app = express();
const server = require('http').createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3001', // Replace with your frontend's origin
    methods: ['GET', 'POST']
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
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('From backend');
});

// WebSocket connection
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

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
