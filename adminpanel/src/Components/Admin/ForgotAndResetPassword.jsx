import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import './ForgotAndResetPassword.css'; 
import logo from "./react.png";

const ForgotAndResetPassword = () => {
  const [step, setStep] = useState(1); 
  const [data, setData] = useState({
    email: "",
    otp: "",
    newPassword: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5012/api/admin/forgot-password", { email: data.email });
      setMessage(res.data.message);
      setStep(2);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error sending OTP");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5012/api/admin/reset-password", data);
      setMessage(res.data.message);
      navigate("/adminlogin");
    } catch (error) {
      setMessage(error.response?.data?.message || "Password reset failed");
    }
  };

  return (
    <div className="password-container">
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
      </nav>
      <section className="form-section">
      <h2>{step === 1 ? "Forgot Password" : "Reset Password"}</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={step === 1 ? handleSendOTP : handleResetPassword} className="password-form">
        {step === 1 && (
          <>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="input-field"
            />
            <button type="submit" className="submit-button">Send OTP</button>
          </>
        )}
        {step === 2 && (
          <>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              onChange={handleChange}
              required
              className="input-field"
            />
            <button type="submit" className="submit-button">Reset Password</button>
          </>
        )}
      </form>
      </section>
    </div>
  );
};

export default ForgotAndResetPassword;