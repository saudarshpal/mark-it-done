const Task = require('../models/Task');
const User = require('../models/User');


const getUser =async(req,res)=>{
   const userId = req.userId
   try{
    let user = await User.findById(userId)
    if(!user){
      return res.status(404).json({msg : "user not found"})
    }
    return res.status(200).json({user})
   }catch(err){console.log(err)}
}



// Create a new task
const createTask = async (req, res) => {
  const {title, description} = req.body;
  const userId = req.userId; 
  try {
    const task = await Task.create({
      userId,
      title,
      description,
    });
    res.status(201).json({task});
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error: error.message });
  }
};

const getTasks = async (req, res) => {
  const userId = req.userId;
  try {
    const tasks = await Task.find({ userId });
    res.status(200).json({ tasks});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error: error.message });
  }
};

// Update a task
const markComplete = async (req, res) => {
  const { id } = req.params;
  const completed = req.body
  try {
    await Task.updateOne({_id : id},completed)
    res.status(200).json({msg :"status updated"})
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error: error.message });
  }
};

module.exports = { createTask, getTasks, markComplete , deleteTask, getUser };