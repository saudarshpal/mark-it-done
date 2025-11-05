const express = require('express');
const cors = require('cors')
const connectToDB = require('./config/db'); 
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config()

const app = express();


app.use(express.json());
app.use(cors())

connectToDB()

app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/tasks', taskRoutes); // Task routes (protected)

app.get('/', (req, res) => {
  res.send('Todo App Backend is running!');
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});