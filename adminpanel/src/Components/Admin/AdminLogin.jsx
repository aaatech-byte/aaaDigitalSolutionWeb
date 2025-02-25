import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";
import logo from "./react.png";

const AdminLogin = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:5012/api/admin/login", { email, password });
      localStorage.setItem("adminToken", response.data.token);
      setIsAuthenticated(true); 
      navigate("/"); 
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    
    <div className="login-container">
      {/* Navigation Bar */}
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="login-box">
        <h2>Login to Dashboard</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="hello@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">LOGIN</button>
        </form>
        <Link  to="/change" className="forgot-password">forget Password</Link>
      </div>
    </div>
  
  );
};

export default AdminLogin;