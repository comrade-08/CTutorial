const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/applicants", require("./routes/applicantRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
