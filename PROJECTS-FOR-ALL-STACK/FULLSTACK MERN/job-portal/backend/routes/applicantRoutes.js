const router = require("express").Router();
const upload = require("../middleware/upload");
const { applyJob, getApplicants } = require("../controllers/applicantController");

router.post("/apply", upload.single("resume"), applyJob);
router.get("/:jobId", getApplicants);

module.exports = router;
