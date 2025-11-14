import React, { useState } from "react";
import { loginUser } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container col-md-4 mt-5">
      <h3 className="text-center mb-4">Login</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3 text-center">Don’t have an account? <Link to="/register">Register</Link></p>
    </div>
  );
}
