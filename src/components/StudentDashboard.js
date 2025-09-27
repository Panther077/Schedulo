import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [selectedCourses, setSelectedCourses] = useState({
    core: [],
    electives: [],
    minor: []
  });

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1>🎓 Student Dashboard</h1>
        <button 
          onClick={handleLogout}
          style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
        {/* Sidebar */}
        <aside style={{
          width: '250px',
          background: 'white',
          borderRight: '1px solid #e0e0e0',
          padding: '2rem 1rem'
        }}>
          <nav>
            <div style={{ marginBottom: '1rem', padding: '1rem', background: '#4facfe', color: 'white', borderRadius: '10px' }}>
              📚 Courses
            </div>
            <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '10px', cursor: 'pointer' }}>
              🗓 My Timetable
            </div>
            <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '10px', cursor: 'pointer' }}>
              ⬇ Downloads
            </div>
          </nav>
        </aside>

        {/* Main Section */}
        <main style={{ flex: 1, padding: '2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>Course Selection</h2>
            
            {/* Course Selection Cards */}
            <div style={{ display: 'grid', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#4facfe', marginBottom: '1rem' }}>📖 Core Courses</h3>
                <p>Foundation courses required for your program</p>
                <div style={{ marginTop: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: '#e3f2fd', borderRadius: '5px', margin: '0.5rem 0' }}>
                    EDU101 - Foundations of Education (4 credits)
                  </div>
                  <div style={{ padding: '0.5rem', background: '#e3f2fd', borderRadius: '5px', margin: '0.5rem 0' }}>
                    PSY101 - Educational Psychology (3 credits)
                  </div>
                </div>
              </div>

              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#43e97b', marginBottom: '1rem' }}>🎯 Elective Courses</h3>
                <p>Choose courses based on your interests</p>
                <div style={{ marginTop: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: '#e8f5e8', borderRadius: '5px', margin: '0.5rem 0' }}>
                    ART101 - Art Integration in Teaching (3 credits)
                  </div>
                  <div style={{ padding: '0.5rem', background: '#e8f5e8', borderRadius: '5px', margin: '0.5rem 0' }}>
                    TECH101 - Educational Technology (3 credits)
                  </div>
                </div>
              </div>

              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#fa709a', marginBottom: '1rem' }}>🌟 Minor Specialization</h3>
                <p>Add expertise in complementary fields</p>
                <div style={{ marginTop: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: '#fce4ec', borderRadius: '5px', margin: '0.5rem 0' }}>
                    LANG101 - Language Teaching Minor (2 credits)
                  </div>
                  <div style={{ padding: '0.5rem', background: '#fce4ec', borderRadius: '5px', margin: '0.5rem 0' }}>
                    SCI101 - Science Education Minor (2 credits)
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button style={{
                background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                margin: '0 1rem',
                boxShadow: '0 4px 15px rgba(79, 172, 254, 0.4)'
              }}>
                📋 Generate My Timetable
              </button>
              <button style={{
                background: 'linear-gradient(45deg, #43e97b, #38f9d7)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                margin: '0 1rem',
                boxShadow: '0 4px 15px rgba(67, 233, 123, 0.4)'
              }}>
                📄 Download PDF
              </button>
            </div>

            {/* Credit Summary */}
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '15px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              marginTop: '2rem',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>Credit Summary</h4>
              <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <div>
                  <strong>Core: 7/12</strong>
                </div>
                <div>
                  <strong>Electives: 6/6</strong>
                </div>
                <div>
                  <strong>Minor: 4/4</strong>
                </div>
                <div style={{ color: '#4facfe' }}>
                  <strong>Total: 17/22 Credits</strong>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;