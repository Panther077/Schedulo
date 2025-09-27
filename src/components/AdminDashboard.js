import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        color: 'white',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1>⚙️ Admin Dashboard</h1>
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
          width: '280px',
          background: 'white',
          borderRight: '1px solid #e0e0e0',
          padding: '2rem 1rem'
        }}>
          <nav>
            {[
              { id: 'overview', label: '📊 Overview', icon: '📊' },
              { id: 'courses', label: '📂 Course Structures', icon: '📂' },
              { id: 'students', label: '👩‍🎓 Student Management', icon: '👩‍🎓' },
              { id: 'faculty', label: '👨‍🏫 Faculty Management', icon: '👨‍🏫' },
              { id: 'timetable', label: '🗓 Master Timetable', icon: '🗓' },
              { id: 'reports', label: '📑 Reports', icon: '📑' },
              { id: 'conflicts', label: '🔍 Conflict Checker', icon: '🔍' },
              { id: 'simulation', label: '🧪 Simulation Mode', icon: '🧪' }
            ].map((item) => (
              <div 
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                style={{ 
                  marginBottom: '0.5rem', 
                  padding: '1rem', 
                  background: activeSection === item.id ? '#fa709a' : '#f8f9fa', 
                  color: activeSection === item.id ? 'white' : '#333',
                  borderRadius: '10px', 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.label}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Section */}
        <main style={{ flex: 1, padding: '2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {activeSection === 'overview' && (
              <div>
                <h2 style={{ marginBottom: '2rem', color: '#333' }}>System Overview</h2>
                
                {/* Stats Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                  <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '15px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👩‍🎓</div>
                    <h3 style={{ color: '#fa709a' }}>Total Students</h3>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>1,247</div>
                  </div>
                  
                  <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '15px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨‍🏫</div>
                    <h3 style={{ color: '#43e97b' }}>Faculty Members</h3>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>89</div>
                  </div>
                  
                  <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '15px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
                    <h3 style={{ color: '#4facfe' }}>Active Courses</h3>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>156</div>
                  </div>
                  
                  <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '15px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏢</div>
                    <h3 style={{ color: '#ff9800' }}>Classrooms</h3>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>45</div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '15px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  marginBottom: '2rem'
                }}>
                  <h3 style={{ color: '#333', marginBottom: '2rem' }}>Quick Actions</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <button style={{
                      background: 'linear-gradient(45deg, #fa709a, #fee140)',
                      color: 'white',
                      border: 'none',
                      padding: '1.5rem',
                      borderRadius: '15px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(250, 112, 154, 0.3)'
                    }}>
                      🤖 Generate AI Timetable
                    </button>
                    <button style={{
                      background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
                      color: 'white',
                      border: 'none',
                      padding: '1.5rem',
                      borderRadius: '15px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(79, 172, 254, 0.3)'
                    }}>
                      📊 View Conflict Report
                    </button>
                    <button style={{
                      background: 'linear-gradient(45deg, #43e97b, #38f9d7)',
                      color: 'white',
                      border: 'none',
                      padding: '1.5rem',
                      borderRadius: '15px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(67, 233, 123, 0.3)'
                    }}>
                      📂 Export All Data
                    </button>
                  </div>
                </div>

                {/* Recent Activities */}
                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '15px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                  <h3 style={{ color: '#333', marginBottom: '1.5rem' }}>Recent Activities</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { action: 'Timetable generated for B.Ed Semester 3', time: '2 hours ago', type: 'success' },
                      { action: 'New faculty member added - Dr. Sarah Johnson', time: '5 hours ago', type: 'info' },
                      { action: 'Conflict resolved in M.Ed course scheduling', time: '1 day ago', type: 'warning' },
                      { action: 'Student enrollment completed for new semester', time: '2 days ago', type: 'success' }
                    ].map((activity, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1rem',
                        background: '#f8f9fa',
                        borderRadius: '10px',
                        borderLeft: `4px solid ${
                          activity.type === 'success' ? '#43e97b' : 
                          activity.type === 'warning' ? '#ff9800' : '#4facfe'
                        }`
                      }}>
                        <span style={{ color: '#333' }}>{activity.action}</span>
                        <span style={{ color: '#666', fontSize: '0.9rem' }}>{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection !== 'overview' && (
              <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <h2 style={{ color: '#333', marginBottom: '1rem' }}>
                  {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section
                </h2>
                <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '2rem' }}>
                  This section is under development and will be available in the next phase.
                </p>
                <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>🚧</div>
                <p style={{ color: '#999' }}>
                  Coming soon: Advanced {activeSection} management features!
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;