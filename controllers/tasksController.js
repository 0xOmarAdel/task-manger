const Task = require("../models/TaskModel");
const { createCustomError } = require("../errors/custom-error");

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
};

const getTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) createCustomError(`No task with id : ${taskID}`, 404);

  res.status(200).json(task);
};

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) createCustomError(`No task with id : ${taskID}`, 404);

  res.status(200).json({ message: "Deleted task successfully" });
};

const updateTask = async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) createCustomError(`No task with id : ${taskID}`, 404);

  res.status(200).json({ message: "Updated task successfully" });
};

module.exports = { createTask, getAllTasks, getTask, updateTask, deleteTask };
