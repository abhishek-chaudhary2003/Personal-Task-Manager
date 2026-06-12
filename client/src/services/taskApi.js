import axios, { Axios } from "axios";

const API = "http://localhost:5000/api/tasks";

export const getTask = (search = "") => {
  axios.get(`${API}?search=${search}`);
};

export const createTask = (taskData) => axios.post(API, taskData);

export const updateTask = (id, taskData) => axios.put(`${API}/${id}`, taskData);

export const toggleTask = (id) => axios.patch(`${API},/${id}/toggle`);

export const deleteTask = (id) => axios.delete(`${API}/${id}`);
