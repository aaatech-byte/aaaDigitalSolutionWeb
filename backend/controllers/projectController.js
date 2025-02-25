const { Project } = require('../models/projectModel.js');
const cloudinary = require('../utils/cloudinaryConfig.js');
const multer = require('multer');
const asyncHandler = require('express-async-handler');


const storage = multer.memoryStorage();
const upload = multer({ storage });


const createProject = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required' });
    }

    console.log('Uploading to Cloudinary...'); // Debugging

   
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'projects' },
        (error, result) => {
          if (error) {
            console.error('Cloudinary Upload Error:', error);
            reject(new Error('Cloudinary upload failed'));
          } else {
            console.log('Cloudinary Upload Successful:', result);
            resolve(result);
          }
        }
      );
      uploadStream.end(req.file.buffer);
    });

    console.log('Cloudinary response:', uploadResult); 

    // ✅ Save project details in MongoDB
    const project = new Project({
      projectName: req.body.projectName,
      description: req.body.description,
      toolsUsed: req.body.toolsUsed,
      imageUrl: uploadResult.secure_url,
    });

    await project.save();
    res.status(201).json({ message: 'Project uploaded successfully', project });

  } catch (error) {
    console.error('Project Upload Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};



const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects); 
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
};



module.exports = {
  upload,
  createProject,
  getProjects,
};
