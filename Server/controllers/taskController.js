import { readJSON, writeJSON } from "../utils/fileStore.js";
import { v4 as uuidv4 } from "uuid";
const TASK_FILE = "./data/tasks.json";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await readJSON(TASK_FILE);

    const sortedTasks = tasks.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );

    res.status(200).json({
      sortedTasks,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch tasks",
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, descreption, dueDate } = req.body;

    if (!title?.trim()) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const tasks = await readJSON(TASK_FILE);
    const newTask = {
      id: uuidv4(),
      title: title.trim(),
      descreption: descreption?.trim() || "",
      dueDate: dueDate || null,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    await writeJSON(TASK_FILE, tasks);

    res.status(200).json({
      message: "Task Created Successfully",
      tasks: newTask,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create task",
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, descreption, dueDate } = req.body();

    if (!title?.trim()) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const tasks = await readJSON(TASK_FILE);

    const taskIndex = tasks.findIndex((task) => task.id === id);

    if ((taskIndex = -1)) {
      return res.status(400).json({
        message: "Task dose not exist",
      });
    }

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      title: title.trim(),
      descreption: descreption?.trim() || "",
      dueDate: dueDate || null,
    };

    await writeJSON(TASK_FILE, tasks);

    res.status(200).json({
      message: "Task Updated successfully",
      tasks: task[taskIndex],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update task",
    });
  }
};

export const toggleTaskStatus = async (req, res) => {
  try {
    res.json({
      message: "Toggle task",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    res.json({
      message: "Delete task",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};
