// ProjectForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [toolsUsed, setToolsUsed] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!projectName || !description || !toolsUsed || !image) {
      setError('All fields are required');
      return;
    }
  
    const formData = new FormData();
    formData.append('projectName', projectName);
    formData.append('description', description);
    formData.append('toolsUsed', toolsUsed);
    formData.append('image', image); 
  
    console.log('Form data being sent:', formData);
  
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${apiUrl}/api/projects`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.data) {
        setSuccessMessage('Project uploaded successfully!');
        setError('');
        setProjectName('');
        setDescription('');
        setToolsUsed('');
        setImage(null);
      }
    } catch (err) {
      console.error(err); 
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Error uploading project');
      } else {
        setError('Error uploading project');
      }
      setSuccessMessage('');
    }
  };
  

  return (
    <div className="project-form-container">
      <h2 className='title'>Upload Your Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter project name"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter project description"
          />
        </div>

        <div className="form-group">
          <label>Tools Used</label>
          <input
            type="text"
            value={toolsUsed}
            onChange={(e) => setToolsUsed(e.target.value)}
            placeholder="Enter tools used"
          />
        </div>

        <div className="form-group">
          <label>Project Image</label>
          <input
            type="file"
            onChange={handleFileChange}
          />
        </div>

        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <button type="submit">Upload Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
