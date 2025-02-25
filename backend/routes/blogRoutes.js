const express = require("express");
const { upload, createBlog, getBlogs, getBlogById } = require("../controllers/blogController");
const router = express.Router();

router.post("/", upload.single("image"), createBlog); 

router.get("/:id", getBlogById);
 
router.get("/", getBlogs);
module.exports = router;
