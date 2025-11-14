import React, { useState, useEffect } from "react";
import API from "../services/api";

export default function TransactionModal({ show, onClose, refresh, transaction }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    type: "expense",
  });

  useEffect(() => {
    if (transaction) setForm(transaction);
  }, [transaction]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (transaction) {
      await API.put(`/transactions/${transaction._id}`, form);
    } else {
      await API.post("/transactions", form);
    }
    refresh();
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content shadow">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">{transaction ? "Edit Transaction" : "Add Transaction"}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <input name="title" value={form.title} className="form-control mb-2" placeholder="Title" onChange={handleChange} required />
              <input name="amount" value={form.amount} className="form-control mb-2" placeholder="Amount" onChange={handleChange} required />
              <input name="category" value={form.category} className="form-control mb-2" placeholder="Category" onChange={handleChange} required />
              <select name="type" value={form.type} className="form-control mb-2" onChange={handleChange}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-success">Save</button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
