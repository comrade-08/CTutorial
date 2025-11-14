const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  name: String,
  email: String,
  resume: String, // file path
  appliedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Applicant", applicantSchema);
