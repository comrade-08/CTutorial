import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// pages
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import JobList from "./pages/Jobs/JobList";
import JobDetails from "./pages/Jobs/JobDetails";
import AddJob from "./pages/Jobs/AddJob";
import EditJob from "./pages/Jobs/EditJob";
import ApplyJob from "./pages/Applicants/ApplyJob";
import ApplicantsList from "./pages/Applicants/ApplicantsList";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/apply/:jobId" element={<ApplyJob />} />

        <Route path="/add-job" element={<ProtectedRoute><AddJob /></ProtectedRoute>} />
        <Route path="/edit-job/:id" element={<ProtectedRoute><EditJob /></ProtectedRoute>} />
        <Route path="/applicants/:jobId" element={<ProtectedRoute><ApplicantsList /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
