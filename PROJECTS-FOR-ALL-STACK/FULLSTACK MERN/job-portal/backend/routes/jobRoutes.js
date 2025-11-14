const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { createJob, getJobs, getOneJob, updateJob, deleteJob } = require("../controllers/jobController");

router.post("/", auth, createJob);
router.get("/", getJobs);
router.get("/:id", getOneJob);
router.put("/:id", auth, updateJob);
router.delete("/:id", auth, deleteJob);

module.exports = router;
