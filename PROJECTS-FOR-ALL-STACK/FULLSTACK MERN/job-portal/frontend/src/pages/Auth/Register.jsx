import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authApi";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "applicant" });
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      alert("Registered — please login");
      nav("/login");
    } catch (err) {
      alert(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="container col-md-6 mt-5">
      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Register</h4>
        <form onSubmit={submit}>
          <input className="form-control mb-2" placeholder="Full name"
            value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <input className="form-control mb-2" placeholder="Email"
            value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <input type="password" className="form-control mb-2" placeholder="Password"
            value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required />
          <div className="mb-3">
            <label className="form-label">Role</label>
            <select className="form-control" value={form.role}
                    onChange={e=>setForm({...form, role:e.target.value})}>
              <option value="applicant">Applicant</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </div>
  );
}
