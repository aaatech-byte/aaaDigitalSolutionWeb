const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController.js"); 

router.get("/", jobController.getAllJobs);
router.get("/:id", jobController.getJobById);
router.post("/", jobController.createJob);
router.put("/:id", jobController.updateJob);
router.delete("/:id", jobController.deleteJob);

module.exports = router;
