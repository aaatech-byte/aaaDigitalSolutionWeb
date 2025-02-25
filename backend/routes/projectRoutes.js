
const express = require('express');
const router = express.Router();
const { upload, createProject, getProjects } = require('../controllers/projectController');


router.post('/', upload.single('image'), createProject);


router.get('/', getProjects);

module.exports = router;
