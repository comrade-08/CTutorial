import React, { useState } from "react";
import { createJob } from "../../api/jobApi";
import { useNavigate } from "react-router-dom";

export default function AddJob() {
  const [form, setForm] = useState({ title:"", company:"", location:"", description:"", salary:0 });
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  const submit = async (e) => {
    e.preventDefault();
    if (!token) return alert("Only admin can post jobs");
    try {
      await createJob(form, token);
      nav("/");
    } catch (err) { alert("Create failed"); }
  };

  return (
    <div className="container mt-4 col-md-8">
      <div className="card shadow-sm p-4">
        <h4>Post New Job</h4>
        <form onSubmit={submit}>
          <input className="form-control mb-2" placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} required />
          <input className="form-control mb-2" placeholder="Company" value={form.company} onChange={e=>setForm({...form, company:e.target.value})} />
          <input className="form-control mb-2" placeholder="Location" value={form.location} onChange={e=>setForm({...form, location:e.target.value})} />
          <textarea className="form-control mb-2" rows="6" placeholder="Description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
          <input type="number" className="form-control mb-2" placeholder="Salary" value={form.salary} onChange={e=>setForm({...form, salary:Number(e.target.value)})} />
          <div className="d-flex gap-2">
            <button className="btn btn-success">Post Job</button>
            <button type="button" className="btn btn-secondary" onClick={()=>nav(-1)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
