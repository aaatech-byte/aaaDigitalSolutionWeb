const Blog = require("../models/blogModel");
const cloudinary = require("../utils/cloudinaryConfig");
const multer = require("multer");
const asyncHandler = require("express-async-handler");


const storage = multer.memoryStorage();
const upload = multer({ storage });


const createBlog = asyncHandler(async (req, res) => {
  const { name, category, introduction, description1, description2, description3, description4, description5, conclusion } = req.body;

  if (!name || !category || !introduction || !description1 || !description2 || !description3 || !description4 || !description5 || !conclusion || !req.file) {
    return res.status(400).json({ message: "All fields and an image are required" });
  }

  try {
    
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "blogs" },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Upload Error:", error);
            reject(new Error("Cloudinary upload failed"));
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(req.file.buffer);
    });

    
    const newBlog = new Blog({
      name,
      category,
      introduction,
      description1,
      description2,
      description3,
      description4,
      description5,
      conclusion,
      imageUrl: uploadResult.secure_url, 
    });

    await newBlog.save();
    res.status(201).json(newBlog);

  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


const getBlogs = asyncHandler(async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const getBlogById = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = { upload, createBlog, getBlogs, getBlogById };
