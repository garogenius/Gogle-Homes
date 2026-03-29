import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: 'rgba(11, 20, 38, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '1.2rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'white',
          letterSpacing: '-1px'
        }}>
          Gogle<span style={{ color: 'var(--primary)' }}>Homes</span>
        </div>
        <ul style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          <li><a href="#" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--primary)' }}>Home</a></li>
          <li><a href="#" style={{ fontSize: '0.9rem', fontWeight: 500 }}>About</a></li>
          <li><a href="#" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Properties</a></li>
          <li><a href="#" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Blog</a></li>
          <li><a href="#" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Contact</a></li>
        </ul>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <a href="#" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Log In</a>
          <button className="btn btn-primary" style={{
            fontSize: '0.8rem',
            padding: '0.7rem 1.4rem'
          }}>
            Book for Inspection
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
