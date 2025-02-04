const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const connectToDB = require('./config/db'); 
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config()

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

//initializing cors 
app.use(cors())

// Connect to MongoDB
connectToDB()


// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/tasks', taskRoutes); // Task routes (protected)

// Default route
app.get('/', (req, res) => {
  res.send('Todo App Backend is running!');
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});