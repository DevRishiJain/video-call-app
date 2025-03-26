const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Store active rooms
const activeRooms = new Map();

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join a room
  socket.on('join-room', (roomId) => {
    const room = activeRooms.get(roomId) || new Set();
    room.add(socket.id);
    activeRooms.set(roomId, room);
    socket.join(roomId);
    socket.roomId = roomId;
    
    // Notify others in the room
    socket.to(roomId).emit('user-joined', socket.id);
    console.log(`User ${socket.id} joined room ${roomId}`);
  });

  // Handle offer within a room
  socket.on('offer', (offer) => {
    socket.to(socket.roomId).emit('offer', offer);
  });

  // Handle answer within a room
  socket.on('answer', (answer) => {
    socket.to(socket.roomId).emit('answer', answer);
  });

  // Handle ICE candidates within a room
  socket.on('ice-candidate', (candidate) => {
    socket.to(socket.roomId).emit('ice-candidate', candidate);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    if (socket.roomId) {
      const room = activeRooms.get(socket.roomId);
      if (room) {
        room.delete(socket.id);
        if (room.size === 0) {
          activeRooms.delete(socket.roomId);
        }
      }
      socket.to(socket.roomId).emit('user-left', socket.id);
    }
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});