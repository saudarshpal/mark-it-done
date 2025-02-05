import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TaskItem from './Taskitem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8800/api/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      navigate('/login');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [navigate]);

  return (
    <div className="task-list">
      <h1>Your Tasks</h1>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
      ))}
    </div>
  );
};

export default TaskList;