import React, { useState } from "react";
import { applyJob } from "../../api/applicantApi";
import { useNavigate, useParams } from "react-router-dom";

export default function ApplyJob() {
  const { jobId } = useParams();
  const nav = useNavigate();
  const [form, setForm] = useState({ name:"", email:"", resume:null });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.resume) return alert("Please upload resume (PDF/DOC)");
    const fd = new FormData();
    fd.append("jobId", jobId);
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("resume", form.resume);

    setLoading(true);
    try {
      await applyJob(fd);
      alert("Application submitted");
      nav("/");
    } catch (err) {
      console.error(err);
      alert("Apply failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="container mt-4 col-md-6">
      <div className="card shadow-sm p-4">
        <h4>Apply for Job</h4>
        <form onSubmit={submit}>
          <input className="form-control mb-2" placeholder="Full name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <input className="form-control mb-2" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <div className="mb-2">
            <label className="form-label">Upload Resume (PDF or DOC)</label>
            <input type="file" className="form-control" accept=".pdf,.doc,.docx"
              onChange={e=>setForm({...form, resume: e.target.files[0]})} required />
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-primary" disabled={loading}>{loading ? "Submitting..." : "Submit Application"}</button>
            <button type="button" className="btn btn-secondary" onClick={()=>nav(-1)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
