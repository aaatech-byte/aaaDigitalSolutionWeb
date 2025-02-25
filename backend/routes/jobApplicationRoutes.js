const express = require('express');
const { upload, createJobApplication,  getJobApplications } = require('../controllers/jobApplicationController');
const router = express.Router();


router.post('/', upload, createJobApplication);

router.get("/", getJobApplications);

module.exports = router;
