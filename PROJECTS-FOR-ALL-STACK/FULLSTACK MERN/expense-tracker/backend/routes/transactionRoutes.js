import express from "express";
import Transaction from "../models/Transaction.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔹 Get all transactions
router.get("/", protect, async (req, res) => {
  const transactions = await Transaction.find({ user: req.user.id }).sort({ date: -1 });
  res.json(transactions);
});

// 🔹 Add transaction
router.post("/", protect, async (req, res) => {
  const { title, amount, category, type } = req.body;
  const transaction = await Transaction.create({
    user: req.user.id,
    title,
    amount,
    category,
    type,
  });
  res.json(transaction);
});

// 🔹 Update transaction
router.put("/:id", protect, async (req, res) => {
  const { title, amount, category, type } = req.body;
  const transaction = await Transaction.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    { title, amount, category, type },
    { new: true }
  );
  if (!transaction) return res.status(404).json({ message: "Transaction not found" });
  res.json(transaction);
});

// 🔹 Delete transaction
router.delete("/:id", protect, async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
