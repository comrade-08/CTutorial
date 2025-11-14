import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import TransactionModal from "./TransactionModal";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [summary, setSummary] = useState({ income: 0, expense: 0, balance: 0 });
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

const fetchUser = async () => {
  const { data } = await API.get("/users/me");
  setUser(data);
};

  const fetchTransactions = async () => {
    const { data } = await API.get("/transactions");
    setTransactions(data);
    calculateSummary(data);
  };

  const calculateSummary = (data) => {
    const income = data
      .filter((t) => t.type === "income")
      .reduce((acc, t) => acc + Number(t.amount), 0);
    const expense = data
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => acc + Number(t.amount), 0);
    const balance = income - expense;
    setSummary({ income, expense, balance });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this transaction?")) {
      await API.delete(`/transactions/${id}`);
      fetchTransactions();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const openModal = (item = null) => {
    setEditItem(item);
    setShowModal(true);
  };

  useEffect(() => {
    fetchUser();
    fetchTransactions();
  }, []);

  // Chart Data
  const chartData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Amount (₹)",
        data: [summary.income, summary.expense],
        backgroundColor: ["#28a745", "#dc3545"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container my-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>💰 Expense Tracker</h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Add Button */}
          <div className="mb-3 d-flex justify-content-between align-items-center">
              <h5 className="text-secondary mb-0">
                  👋 Welcome, <span className="fw-bold text-dark">{user?.name || "User"}</span>
              </h5>
              <button className="btn btn-primary" onClick={() => openModal()}>
                  + Add Transaction
              </button>
          </div>


      {/* Summary Cards */}
      <div className="row text-center mb-4">
        <div className="col-md-4 mb-3">
          <div className="card shadow border-success">
            <div className="card-body">
              <h5 className="card-title text-success">Total Income</h5>
              <h3>₹{summary.income}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow border-danger">
            <div className="card-body">
              <h5 className="card-title text-danger">Total Expense</h5>
              <h3>₹{summary.expense}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow border-primary">
            <div className="card-body">
              <h5 className="card-title text-primary">Balance</h5>
              <h3>₹{summary.balance}</h3>
            </div>
          </div>
        </div>
      </div>

<div className="d-xl-flex gap-4">
      {/* Chart Section */}
      <div className="card shadow p-3 mb-4 w-100">
        <h5 className="mb-3">Overview Chart</h5>
        <Bar data={chartData} />
      </div>

      

      {/* Transaction Table */}
      <div className="card shadow w-100">
        <div className="card-body">
          <h5 className="card-title mb-3">Transactions History</h5>
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Amount</th>
                  {/* <th>Date</th> */}
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t._id}>
                    <td>{t.title}</td>
                    <td>{t.category}</td>
                    <td>
                      <span
                        className={`badge bg-${
                          t.type === "income" ? "success" : "danger"
                        }`}
                      >
                        {t.type}
                      </span>
                    </td>
                    <td>₹{t.amount}</td>
                    {/* <td>
                      {new Date(t.createdAt).toLocaleDateString("en-IN")}
                    </td> */}
                    <td className="text-end">
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => openModal(t)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(t._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {transactions.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center text-muted">
                      No transactions yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
</div>

      {/* Modal */}
      <TransactionModal
        show={showModal}
        onClose={() => setShowModal(false)}
        refresh={fetchTransactions}
        transaction={editItem}
      />
    </div>
  );
}
