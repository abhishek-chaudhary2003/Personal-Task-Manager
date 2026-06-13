import axios from "axios";

const API =
  "https://personal-task-manager-qhvd.onrender.com/api/tasks";

export const getTasks = async (
  search = ""
) => {
  return await axios.get(
    `${API}?search=${search}`
  );
};

export const createTask = async (
  taskData
) => {
  return await axios.post(
    API,
    taskData
  );
};

export const updateTask = async (
  id,
  taskData
) => {
  return await axios.put(
    `${API}/${id}`,
    taskData
  );
};

export const toggleTask = async (
  id
) => {
  return await axios.patch(
    `${API}/${id}/toggle`
  );
};

export const deleteTask = async (
  id
) => {
  return await axios.delete(
    `${API}/${id}`
  );
};