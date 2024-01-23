const Task = require("../models/TaskModel");

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

const getAllTasks = (req, res) => {
  res.send([]);
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
