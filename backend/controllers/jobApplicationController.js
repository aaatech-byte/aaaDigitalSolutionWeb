const JobApplication = require('../models/jobApplicationModel');
const cloudinary = require('../utils/cloudinaryConfig');
const multer = require('multer');
const asyncHandler = require('express-async-handler');
const sendContactEmailjobappliaction = require('../utils/sendContactEmailjob');


const storage = multer.memoryStorage();
const upload = multer({ storage }).single('cv');


const createJobApplication = asyncHandler(async (req, res) => {
  console.log('Request Body:', req.body);
  console.log('Uploaded File:', req.file);

  const { fullName, email, phone, position = 'N/A', experience, about } = req.body;
  if (!fullName || !email || !phone || !experience || !req.file) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    console.log('Uploading CV to Cloudinary...');

   
    const cloudinaryUpload = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'job_applications', resource_type: 'auto' }, // `auto` ensures PDF uploads work
        (error, result) => (error ? reject(error) : resolve(result))
      );
      stream.end(req.file.buffer);
    });

    console.log('Cloudinary Response:', cloudinaryUpload); 

    
    const newApplication = await JobApplication.create({
      fullName,
      email,
      phone,
      position,
      experience,
      about,
      cvUrl: cloudinaryUpload.secure_url, 
    });
    await sendContactEmailjobappliaction(fullName, email, position,);
    res.status(201).json({
      message: 'Job application submitted successfully',
      application: newApplication,
    });
  } catch (error) {
    console.error('Error during job application:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
const getJobApplications = asyncHandler(async (req, res) => {
  try {
    const applications = await JobApplication.find();
    res.status(200).json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = { upload, createJobApplication,  getJobApplications };
