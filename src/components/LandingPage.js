import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  // Function to handle login button clicks
  const handleLoginClick = (userType) => {
    navigate(`/login/${userType}`);
  };

  return (
    <div className="landing-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo-section">
          <div className="logo">📚</div>
          <h1 className="title">Schedulo</h1>
          <span className="subtitle">NEP 2020 Aligned</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <h2 className="tagline">
            AI-Powered Timetable Generator for Flexible, Multidisciplinary Education
          </h2>
          <p className="description">
            Streamline your academic scheduling with intelligent automation. 
            Perfect for FYUP, B.Ed, M.Ed, and ITEP programs under NEP 2020.
          </p>

          {/* Login Buttons */}
          <div className="login-buttons">
            <button 
              className="login-btn student-btn"
              onClick={() => handleLoginClick('student')}
            >
              🔵 Login as Student
            </button>
            <button 
              className="login-btn faculty-btn"
              onClick={() => handleLoginClick('faculty')}
            >
              🟢 Login as Faculty
            </button>
            <button 
              className="login-btn admin-btn"
              onClick={() => handleLoginClick('admin')}
            >
              🟠 Login as Admin
            </button>
          </div>

          {/* Features Preview */}
          <div className="features-preview">
            <div className="feature-card">
              <h3>🤖 AI-Powered</h3>
              <p>Intelligent conflict resolution and workload optimization</p>
            </div>
            <div className="feature-card">
              <h3>📱 Multi-Program</h3>
              <p>Support for FYUP, B.Ed, M.Ed, and ITEP programs</p>
            </div>
            <div className="feature-card">
              <h3>⚡ Real-Time</h3>
              <p>Instant updates and conflict detection</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Schedulo - Empowering Education Through Smart Scheduling</p>
      </footer>
    </div>
  );
};

export default LandingPage;