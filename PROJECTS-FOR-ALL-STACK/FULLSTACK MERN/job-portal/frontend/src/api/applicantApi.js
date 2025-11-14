import axios from "axios";

const API = "http://localhost:5000/api/applicants";

export const applyJob = (formData) =>
  axios.post(`${API}/apply`, formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });

export const getApplicants = (jobId) =>
  axios.get(`${API}/${jobId}`);
