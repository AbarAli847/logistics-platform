const { json } = require('express')
const Task = require('../model/task.model')

// Post
exports.createTask = async (req,res)=>{
    try {
        const {title, description, status, userId  } = req.body

        const task = await Task.create({
            title,
            description,
            status,
            userId,
        })
        res.status(201).json({
            success: true,
            message: 'Task created Successfully',
            data: task,
        })
    } catch (error) {
           res.status(500),json({
            success: false,
            message: 'Error creating Task',
            error: error.message
           })
    }

}
        //    Get
exports.getgetAllTasks = async () =>{
try {
          const tasks = await Task.find().populate('userId')
          res.status(200).json({
             successs: true,
             data: tasks
          })
} catch (error) {
    res.status(500).json({
        success: false,
        message: 'Error Fetching data',
        error: error.message,
    })
}
}
   
        //  Get by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("userId");

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching task",
      error: error.message,
    });
  }
};
    // updated 
exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating task",
      error: error.message,
    });
  }
};
//    delete
exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting task",
      error: error.message,
    });
  }
};