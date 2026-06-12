import { readJSON, writeJSON } from "../utils/fileStore.js";
import { v4 as uuidv4 } from "uuid";
const TASK_FILE = "./data/tasks.json";

export const getAllTasks = async (req, res) => {
  try {
    const { search = "" } = req.query;

const tasks = await readJSON(TASK_FILE);

const filteredTasks = tasks.filter(
  (task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase())
);

const sortedTasks = filteredTasks.sort(
  (a, b) =>
    new Date(b.createdAt) -
    new Date(a.createdAt)
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
    const { title, descreption, dueDate } = req.body;
    if (!title?.trim()) {
      return res.status(400).json({
        message: "Title is required",
      });
    }
    
    const tasks = await readJSON(TASK_FILE);
    
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if ((taskIndex === -1)) {
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
      tasks: tasks[taskIndex],
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
    const { id } = req.params;
    const tasks = await readJSON(TASK_FILE);

    const taskIndex = tasks.findIndex((task) => (task.id === id));
    if (taskIndex === -1) {
      return res.status(400).json({
        message: "Task not found",
      });
    }

    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    await writeJSON(TASK_FILE, tasks);
    res.status(200).json({
      message: "Task status updated successfully",
      task: tasks[taskIndex],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update task status",
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await readJSON(TASK_FILE);

    const taskIndex = tasks.findIndex((task) => (task.id === id));
    if (taskIndex === -1) {
      return res.status(400).json({
        message: "Task not found",
      });
    }
    tasks.splice(taskIndex, 1);
    await writeJSON(TASK_FILE, tasks);
    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete task",
    });
  }
};
