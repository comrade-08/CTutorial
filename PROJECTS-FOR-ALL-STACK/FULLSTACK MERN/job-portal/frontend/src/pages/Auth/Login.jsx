import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../api/authApi";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      // backend returns { token, user }
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      nav("/"); // go to home (job list)
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="container col-md-5 mt-5">
      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Login</h4>
        <form onSubmit={submit}>
          <input className="form-control mb-2" placeholder="Email"
            value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <input type="password" className="form-control mb-2" placeholder="Password"
            value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required />
          <button className="btn btn-primary w-100">Login</button>
        </form>
        <p className="mt-3">Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}
