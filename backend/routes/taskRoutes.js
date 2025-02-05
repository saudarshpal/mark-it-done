const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authmiddleware');

// Protect all task routes with authentication middleware
router.use(authMiddleware);

// Create a new task
router.post('/', taskController.createTask);

// Get all tasks for the logged-in user
router.get('/', taskController.getTasks);

// Update a task
router.put('/:id', taskController.updateTask);

// Delete a task
router.delete('/:id', taskController.deleteTask);

module.exports = router;