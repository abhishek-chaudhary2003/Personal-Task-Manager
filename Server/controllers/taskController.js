export const getAllTasks = async (req, res) => {
  try {
    res.json({
      message: "Get all tasks",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const createTask = async (req, res) => {
  try {
    res.json({
      message: "Create task",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    res.json({
      message: "Update task",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
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
