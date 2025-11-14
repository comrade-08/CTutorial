import React, { useState } from "react";
import API from "../services/api";

export default function TransactionForm({ refresh }) {
    const [form, setForm] = useState({ title: "", amount: "", category: "", type: "expense" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post("/transactions", form);
        setForm({ title: "", amount: "", category: "", type: "expense" });
        refresh();
    };

    return (
        <form className="row g-2" onSubmit={handleSubmit}>
            <div className="col-md-3"><input name="title" className="form-control" placeholder="Title" onChange={handleChange} /></div>
            <div className="col-md-2"><input name="amount" className="form-control" placeholder="Amount" onChange={handleChange} /></div>
            <div className="col-md-3"><input name="category" className="form-control" placeholder="Category" onChange={handleChange} /></div>
            <div className="col-md-2">
                <select name="type" className="form-control" onChange={handleChange}>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>
            </div>
            <div className="col-md-2"><button className="btn btn-primary w-100">Add</button></div>
        </form>
    );
}
