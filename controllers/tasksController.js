const Task = require("../models/TaskModel");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskId}` });
    }

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTask = (req, res) => {
  res.send([]);
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskId}` });
    }

    res
      .status(201)
      .json({ success: true, message: "Deleted task successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createTask, getAllTasks, getTask, updateTask, deleteTask };
