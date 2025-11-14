import React, { useState } from "react";
import { registerUser } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      navigate("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="container col-md-4 mt-5">
      <h3 className="text-center mb-4">Register</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" className="form-control mb-2" placeholder="Name" onChange={handleChange} />
        <input name="email" className="form-control mb-2" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" className="form-control mb-2" placeholder="Password" onChange={handleChange} />
        <button className="btn btn-success w-100">Register</button>
        <p className="mt-3 text-center">Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}
