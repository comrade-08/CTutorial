import axios from "axios";

const API = "http://localhost:5000/api/jobs";

export const getJobs = () => axios.get(API);
export const getJobById = (id) => axios.get(`${API}/${id}`);
export const createJob = (data, token) =>
  axios.post(API, data, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const updateJob = (id, data, token) =>
  axios.put(`${API}/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const deleteJob = (id, token) =>
  axios.delete(`${API}/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
