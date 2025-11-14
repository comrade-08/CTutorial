const Applicant = require("../models/Applicant");

exports.applyJob = async (req, res) => {
  const appli = await Applicant.create({
    jobId: req.body.jobId,
    name: req.body.name,
    email: req.body.email,
    resume: req.file.filename
  });
  res.json(appli);
};

exports.getApplicants = async (req, res) => {
  const applicants = await Applicant.find({ jobId: req.params.jobId });
  res.json(applicants);
};
