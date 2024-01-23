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

const getTask = (req, res) => {
  res.send([]);
};

const updateTask = (req, res) => {
  res.send([]);
};

const deleteTask = (req, res) => {
  res.send([]);
};

module.exports = { createTask, getAllTasks, getTask, updateTask, deleteTask };
