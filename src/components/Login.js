import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const { userType } = useParams(); // Gets 'student', 'faculty', or 'admin' from URL
  const navigate = useNavigate();
  
  // State to manage form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission (we'll add Firebase auth later)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process (we'll replace this with real Firebase auth)
    setTimeout(() => {
      setIsLoading(false);
      
      // Navigate to appropriate dashboard based on user type
      switch (userType) {
        case 'student':
          navigate('/student-dashboard');
          break;
        case 'faculty':
          navigate('/faculty-dashboard');
          break;
        case 'admin':
          navigate('/admin-dashboard');
          break;
        default:
          navigate('/');
      }
    }, 1500);
  };

  // Function to get user type display info
  const getUserTypeInfo = () => {
    switch (userType) {
      case 'student':
        return {
          title: 'Student Login',
          emoji: '🔵',
          color: 'student',
          placeholder: 'Enter your student email'
        };
      case 'faculty':
        return {
          title: 'Faculty Login',
          emoji: '🟢',
          color: 'faculty',
          placeholder: 'Enter your faculty email'
        };
      case 'admin':
        return {
          title: 'Admin Login',
          emoji: '🟠',
          color: 'admin',
          placeholder: 'Enter your admin email'
        };
      default:
        return {
          title: 'Login',
          emoji: '🔐',
          color: 'default',
          placeholder: 'Enter your email'
        };
    }
  };

  const userInfo = getUserTypeInfo();

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <button 
            className="back-button"
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </button>
          <div className="logo-section">
            <div className="logo">📚</div>
            <h1>Schedulo</h1>
          </div>
        </div>

        {/* Login Form */}
        <div className="login-form-container">
          <div className={`login-title ${userInfo.color}`}>
            <span className="user-emoji">{userInfo.emoji}</span>
            <h2>{userInfo.title}</h2>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={userInfo.placeholder}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button 
              type="submit" 
              className={`login-submit-btn ${userInfo.color}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  Signing In...
                </>
              ) : (
                <>
                  {userInfo.emoji} Sign In as {userType.charAt(0).toUpperCase() + userType.slice(1)}
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="demo-info">
            <p><strong>Demo Credentials:</strong></p>
            <p>Email: demo@{userType}.edu</p>
            <p>Password: demo123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;