import React, { useState } from "react";
import axios from "axios";
// import "./JobApplicationForm.css"; // Import CSS file

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    about: "",
    cv: null,
  });

  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.cv) {
      setMessage("Please upload your CV.");
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post("http://localhost:5012/api/job-applications", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(response.data.message);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        about: "",
        cv: null,
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="container">
      <h2>Job Application</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="position" placeholder="Position (Optional)" value={formData.position} onChange={handleChange} />
        <input type="number" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} required />
        <textarea name="about" placeholder="Tell us about yourself" value={formData.about} onChange={handleChange}></textarea>
        <input type="file" name="cv" onChange={handleFileChange} required />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
