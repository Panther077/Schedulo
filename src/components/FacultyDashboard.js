import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [availability, setAvailability] = useState({
    monday: ['09:00-12:00', '14:00-17:00'],
    tuesday: ['09:00-12:00'],
    wednesday: ['10:00-15:00'],
    thursday: ['09:00-12:00', '14:00-16:00'],
    friday: ['09:00-11:00']
  });

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        color: 'white',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1>👨‍🏫 Faculty Dashboard</h1>
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
            <div style={{ marginBottom: '1rem', padding: '1rem', background: '#43e97b', color: 'white', borderRadius: '10px' }}>
              🕒 Availability
            </div>
            <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '10px', cursor: 'pointer' }}>
              📊 Workload
            </div>
            <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '10px', cursor: 'pointer' }}>
              🗓 My Timetable
            </div>
            <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '10px', cursor: 'pointer' }}>
              ⚠ Clash Requests
            </div>
          </nav>
        </aside>

        {/* Main Section */}
        <main style={{ flex: 1, padding: '2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>Weekly Availability</h2>
            
            {/* Availability Grid */}
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#43e97b', marginBottom: '1.5rem' }}>Set Your Available Hours</h3>
              
              {Object.entries(availability).map(([day, slots]) => (
                <div key={day} style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  padding: '1rem',
                  background: '#f8f9fa',
                  borderRadius: '10px'
                }}>
                  <div style={{ width: '120px', fontWeight: 'bold', textTransform: 'capitalize' }}>
                    {day}:
                  </div>
                  <div style={{ flex: 1 }}>
                    {slots.map((slot, index) => (
                      <span key={index} style={{
                        background: '#43e97b',
                        color: 'white',
                        padding: '0.3rem 0.8rem',
                        margin: '0.2rem',
                        borderRadius: '15px',
                        fontSize: '0.9rem',
                        display: 'inline-block'
                      }}>
                        {slot}
                      </span>
                    ))}
                  </div>
                  <button style={{
                    background: '#38f9d7',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}>
                    Edit
                  </button>
                </div>
              ))}
            </div>

            {/* Workload Summary */}
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#43e97b', marginBottom: '1.5rem' }}>Current Workload</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div style={{
                  background: '#e8f5e8',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  <h4 style={{ color: '#2e7d32' }}>Teaching Hours</h4>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#43e97b' }}>16/20</div>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>hours per week</p>
                </div>
                
                <div style={{
                  background: '#e1f5fe',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  <h4 style={{ color: '#0277bd' }}>Active Courses</h4>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#00bcd4' }}>4</div>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>courses assigned</p>
                </div>
                
                <div style={{
                  background: '#fce4ec',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  <h4 style={{ color: '#c2185b' }}>Students</h4>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e91e63' }}>127</div>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>total students</p>
                </div>
              </div>
            </div>

            {/* Current Assignments */}
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#43e97b', marginBottom: '1.5rem' }}>Current Course Assignments</h3>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  { code: 'EDU101', name: 'Foundations of Education', students: 35, hours: '4hrs/week' },
                  { code: 'PSY201', name: 'Advanced Educational Psychology', students: 28, hours: '3hrs/week' },
                  { code: 'MET301', name: 'Teaching Methodology', students: 42, hours: '5hrs/week' },
                  { code: 'PRA401', name: 'Teaching Practice', students: 22, hours: '4hrs/week' }
                ].map((course, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    background: '#f8f9fa',
                    borderRadius: '10px',
                    border: '1px solid #e0e0e0'
                  }}>
                    <div>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{course.code} - {course.name}</h4>
                      <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                        {course.students} students • {course.hours}
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <span style={{
                        background: '#43e97b',
                        color: 'white',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem'
                      }}>
                        Active
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FacultyDashboard;