import React, { useEffect, useState } from "react";
import { getJobById, deleteJob } from "../../api/jobApi";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const token = localStorage.getItem("token");

  const fetch = async () => {
    try {
      const res = await getJobById(id);
      setJob(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=>{ fetch(); }, [id]);

  const handleDelete = async () => {
    if (!token) return alert("Login as admin to delete");
    if (!window.confirm("Delete job?")) return;
    try {
      await deleteJob(id, token);
      nav("/");
    } catch (err) { alert("Delete failed"); }
  };

  if (!job) return <div className="container mt-4">Loading…</div>;

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <div className="d-flex justify-content-between">
          <div>
            <h3>{job.title}</h3>
            <p className="mb-1"><strong>{job.company}</strong> • {job.location}</p>
            <small className="text-muted">Posted on {new Date(job.createdAt).toLocaleDateString()}</small>
          </div>
          <div>
            {user?.role === "admin" && (
              <>
                <Link to={`/edit-job/${job._id}`} className="btn btn-warning me-2">Edit</Link>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
              </>
            )}
          </div>
        </div>

        <hr/>
        <p>{job.description}</p>

        <div className="mt-3">
          <Link to={`/apply/${job._id}`} className="btn btn-primary me-2">Apply Now</Link>
          {user?.role === "admin" && (
            <Link to={`/applicants/${job._id}`} className="btn btn-outline-secondary">View Applicants</Link>
          )}
        </div>
      </div>
    </div>
  );
}
