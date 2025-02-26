import { useState } from "react";
import axios from "axios";
import "./BlogForm.css";

const BlogForm = () => {
  const [blogData, setBlogData] = useState({
    name: "",
    category: "",
    introduction: "",
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    conclusion: "",
  });

  const [image, setImage] = useState(null); 
  const [preview, setPreview] = useState(null); 
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
   
    Object.keys(blogData).forEach((key) => {
      formData.append(key, blogData[key]);
    });

    
    if (image) {
      formData.append("image", image);
    } else {
      setMessage("❌ Please select an image.");
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.post(`${apiUrl}/api/blogs`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ Blog uploaded successfully!");
      setBlogData({
        name: "",
        category: "",
        introduction: "",
        description1: "",
        description2: "",
        description3: "",
        description4: "",
        description5: "",
        conclusion: "",
      });
      setImage(null);
      setPreview(null);
    } catch (error) {
      setMessage("❌ Failed to upload blog.");
      console.error(error);
    }
  };

  return (
    <div className="blog-container">
      <h2>Upload a Blog</h2>

      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Blog Name:</label>
          <input type="text" name="name" value={blogData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <input type="text" name="category" value={blogData.category} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Introduction:</label>
          <textarea name="introduction" value={blogData.introduction} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Description 1:</label>
          <textarea name="description1" value={blogData.description1} onChange={handleChange}  />
        </div>

        <div className="form-group">
          <label>Description 2:</label>
          <textarea name="description2" value={blogData.description2} onChange={handleChange}  />
        </div>

        <div className="form-group">
          <label>Description 3:</label>
          <textarea name="description3" value={blogData.description3} onChange={handleChange}  />
        </div>

        <div className="form-group">
          <label>Description 4:</label>
          <textarea name="description4" value={blogData.description4} onChange={handleChange}  />
        </div>

        <div className="form-group">
          <label>Description 5:</label>
          <textarea name="description5" value={blogData.description5} onChange={handleChange}  />
        </div>

        <div className="form-group">
          <label>Conclusion:</label>
          <textarea name="conclusion" value={blogData.conclusion} onChange={handleChange}  />
        </div>

       
        <div className="form-group">
          <label>Upload Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} required />
        </div>

      
        {preview && (
          <div className="image-preview">
            <p>Image Preview:</p>
            <img src={preview} alt="Selected" />
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
