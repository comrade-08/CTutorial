const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  const job = await Job.create({ ...req.body, createdBy: req.user.id });
  res.json(job);
};

exports.getJobs = async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
};

exports.getOneJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
};

exports.updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(job);
};

exports.deleteJob = async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ msg: "Job Deleted" });
};
