import React, { useEffect, useState } from "react";
import { getJobs } from "../../api/jobApi";
import { Link } from "react-router-dom";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  const fetch = async () => {
    try {
      const res = await getJobs();
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=>{ fetch(); }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Open Positions</h3>
        <Link to="/add-job" className="btn btn-primary">Post Job</Link>
      </div>

      <div className="row g-3">
        {jobs.map(j => (
          <div className="col-md-6" key={j._id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>{j.title}</h5>
                <p className="mb-1"><strong>{j.company}</strong> — {j.location}</p>
                <p className="text-truncate">{j.description}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <small className="text-muted">{new Date(j.createdAt).toLocaleDateString()}</small>
                  <Link to={`/jobs/${j._id}`} className="btn btn-sm btn-outline-primary">View</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        {jobs.length === 0 && <p className="text-muted">No jobs posted yet.</p>}
      </div>
    </div>
  );
}
