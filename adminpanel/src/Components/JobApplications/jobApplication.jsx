import React, { useEffect, useState } from "react";
import axios from "axios";
import "./JobApplications.css";

const JobApplications = () => {
  const [applications, setApplications] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState("All");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/api/job-applications`);
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching job applications:", error);
      }
    };

    fetchApplications();
  }, []);

  // Extract unique positions and count occurrences
  const positionCounts = applications.reduce((acc, app) => {
    acc[app.position] = (acc[app.position] || 0) + 1;
    return acc;
  }, {});

  const filteredApplications =
    selectedPosition === "All"
      ? applications
      : applications.filter((app) => app.position === selectedPosition);

  return (
    <div className="applications-container">
      <h2 style={{ color: "yellow" }}>Job Applications</h2>

      {/* Position Filter */}
      <div className="filter-container">
        <label>Filter by Position: </label>
        <select onChange={(e) => setSelectedPosition(e.target.value)} value={selectedPosition}>
          <option value="All">All ({applications.length})</option>
          {Object.keys(positionCounts).map((position) => (
            <option key={position} value={position}>
              {position} ({positionCounts[position]})
            </option>
          ))}
        </select>
      </div>

      {filteredApplications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Position</th>
              <th>About</th>
              <th>CV</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app) => (
              <tr key={app._id}>
                <td>{app.fullName}</td>
                <td>{app.email}</td>
                <td>{app.phone}</td>
                <td>{app.position}</td>
                <td>{app.about}</td>
                <td>
                  <a href={app.cvUrl} target="_blank" rel="noopener noreferrer">
                    Download CV
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JobApplications;
