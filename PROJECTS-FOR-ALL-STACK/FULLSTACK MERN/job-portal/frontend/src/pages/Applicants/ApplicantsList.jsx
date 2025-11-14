import React, { useEffect, useState } from "react";
import { getApplicants } from "../../api/applicantApi";
import { useParams } from "react-router-dom";

export default function ApplicantsList() {
  const { jobId } = useParams();
  const [list, setList] = useState([]);

  const fetch = async () => {
    try {
      const res = await getApplicants(jobId);
      setList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=>{ fetch(); }, [jobId]);

  return (
    <div className="container mt-4">
      <h4>Applicants</h4>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead><tr><th>Name</th><th>Email</th><th>Resume</th><th>Applied</th></tr></thead>
          <tbody>
            {list.map(a => (
              <tr key={a._id}>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>
                  {a.resume ? <a href={`http://localhost:5000/uploads/${a.resume}`} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">View</a> : "—"}
                </td>
                <td>{new Date(a.appliedAt).toLocaleString()}</td>
              </tr>
            ))}
            {list.length === 0 && <tr><td colSpan="4" className="text-muted">No applicants yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
