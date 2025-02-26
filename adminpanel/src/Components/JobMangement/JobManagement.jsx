import React, { useState, useEffect } from "react";
import axios from "axios";
import "./JobManagement.css"; 

const JobManagement = () => {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState(null);
  const [jobId, setJobId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    type: "Full-time",
    description: "",
    responsibilities: "",
    skills: "",
  });
  const apiUrl = import.meta.env.VITE_API_URL;
  const API_URL = `${apiUrl}/api/jobs`;

  // Fetch all jobs
  const fetchJobs = async () => {
    try {
      const response = await axios.get(API_URL);
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // Fetch job by ID
  const fetchJobById = async () => {
    if (!jobId) return;
    try {
      const response = await axios.get(`${API_URL}/${jobId}`);
      setJob(response.data);
    } catch (error) {
      console.error("Error fetching job by ID:", error);
    }
  };

  // Create a new job
  const createJob = async (e) => {
    e.preventDefault();
    try {
      const newJob = {
        ...formData,
        responsibilities: formData.responsibilities.split(","),
        skills: formData.skills.split(","),
      };
      await axios.post(API_URL, newJob);
      alert("Job created successfully!");
      fetchJobs();
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  // Delete a job
  const deleteJob = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      alert("Job deleted successfully!");
      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

 
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="job-container">
      <h2>Job Management</h2>

      {/* Create Job Form */}
      <form onSubmit={createJob} className="job-form">
        <h3 style={{color:'yellow'}}>Create Job</h3>
        <input
          type="text"
          placeholder="Job Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <input
          type="text"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          placeholder="Enter category"
/>

        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option>Full-time</option>
          <option>Contract</option>
          <option>Part-time</option>
          <option>Freelance</option>
          <option>Remote</option>
        </select>
        <select
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
        >
        <option value="">Select Shift</option>
        <option value="Morning Shift (9am to 6pm)">Morning Shift (9am to 6pm)</option>
        <option value="Afternoon Shift (2pm to 11pm)">Afternoon Shift(2pm to 11pm)</option>
        <option value="Evening Shift (6am to 3am)">Evening Shift (6pm to 3am)</option>
        <option value="Night Shift (8pm to 5am)">Night Shift (8pm to 5am)</option>
        </select>

        <input
          type="text"
          placeholder="Responsibilities (comma separated)"
          value={formData.responsibilities}
          onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          required
        /> <br/>
        <button type="submit">Create Job</button>
      </form>

      {/* Search Jobs */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by Name or Category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Fetch Job by ID */}
      <div className="fetch-job">
        <h3>Fetch Job by ID</h3>
        <input
          type="text"
          placeholder="Enter Job ID"
          value={jobId}
          onChange={(e) => setJobId(e.target.value)}
        /> <br/>
        <button onClick={fetchJobById}>Fetch Job</button>
        {job && (
          <div className="job-details">
            <h4>{job.title}</h4>
            <p>{job.description}</p>
          </div>
        )}
      </div>

      {/* Job List */}
      <h3 style={{color:"yellow"}}>All Jobs</h3>
      {filteredJobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        <ul className="job-list">
          {filteredJobs.map((job) => (
            <li key={job._id} className="job-card">
              <h4 style={{color:"yellow"}}>{job.title}</h4>
              <p style={{color:"white"}}><strong>Category:</strong> {job.category}</p>
              <p style={{color:"white"}}><strong>Type:</strong> {job.type}</p>
              <p style={{color:"white"}}><strong>Description:</strong> {job.description}</p>
              <p style={{color:"white"}}><strong>Responsibilities:</strong> {job.responsibilities.join(", ")}</p>
              <p style={{color:"white"}}><strong>Skills:</strong> {job.skills.join(", ")}</p>
              <button onClick={() => deleteJob(job._id)} className="delete-btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobManagement;
