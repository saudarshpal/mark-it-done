import React, { useState } from 'react';
import axios from 'axios';

const TaskItem = ({ task, fetchTasks }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
    dueDate: task.dueDate.split('T')[0], // Format date for input field
  });

  // Update task status to "completed"
  const markAsDone = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:PORT/api/tasks/${task._id}`,
        { status: 'completed' },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchTasks(); // Refresh the task list
    } catch (error) {
      console.error('Error marking task as done:', error);
    }
  };

  // Delete a task
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:PORT/api/tasks/${task._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTasks(); // Refresh the task list
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Save edited task
  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:PORT/api/tasks/${task._id}`,
        editedTask,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchTasks(); // Refresh the task list
      setIsEditing(false); // Exit edit mode
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setEditedTask({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate.split('T')[0],
    });
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div className="task-item" onClick={() => !isEditing && setShowDetails(!showDetails)}>
      <div className="task-header">
        {isEditing ? (
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          />
        ) : (
          <h3>{task.title}</h3>
        )}
        {task.status === 'pending' && (
          <button
            className="done-button"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the task details from toggling
              markAsDone();
            }}
          >
            Done
          </button>
        )}
      </div>
      {showDetails && (
        <>
          {isEditing ? (
            <textarea
              value={editedTask.description}
              onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
            />
          ) : (
            <p>{task.description}</p>
          )}
          {isEditing ? (
            <input
              type="date"
              value={editedTask.dueDate}
              onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
            />
          ) : (
            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
          )}
          <div className="task-actions">
            {isEditing ? (
              <>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the task details from toggling
                    setIsEditing(true);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the task details from toggling
                    handleDelete();
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;