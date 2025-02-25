import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Contact from "./Components/Messages/Contact";
import Blogs from "./Components/Blogs/Blogs";
import Projects from "./Components/Projects/Projects";
import JobApplications from "./Components/JobApplications/jobApplication";
import JobApplicationForm from "./JobApplicationForm";
import ReviewList from "./Components/Reviews/ReviewList";
import JobManagement from "./Components/JobMangement/JobManagement";
import AdminLogin from "./Components/Admin/AdminLogin";
import ForgotAndResetPassword from "./Components/Admin/ForgotAndResetPassword";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
  
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false); 
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <Router>
      <Routes>
        
        <Route path="/adminlogin" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/change" element={<ForgotAndResetPassword />} />

        
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Layout />}>
              <Route path="message" element={<Contact />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="jobmangement" element={<JobManagement />} />
              <Route path="job" element={<JobApplications />} />
              <Route path="projects" element={<Projects />} />
              <Route path="reviews" element={<ReviewList />} />
              <Route path="test" element={<JobApplicationForm />} />
              <Route path="change-password" element={<ForgotAndResetPassword />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/adminlogin" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
