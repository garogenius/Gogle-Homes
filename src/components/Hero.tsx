import React from 'react';

const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0',
      overflow: 'hidden'
    }}>
      {/* Background Image */}
      <img 
        src="/images/hero.png" 
        alt="Modern Villa" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(0.6)'
        }}
      />
      
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.2rem',
          color: 'var(--primary)',
          marginBottom: '1rem'
        }}>
          What's New in The World
        </div>
        <h1 style={{
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: 700,
          lineHeight: '1',
          marginBottom: '1.5rem',
          color: 'white'
        }}>
          Modern Homes for <br/> <span style={{ color: 'var(--primary)' }}>Modern Families</span>
        </h1>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginTop: '3rem'
        }}>
          <button className="btn btn-primary" style={{ padding: '1rem 2rem' }}>View Properties</button>
          <button className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Our Services</button>
        </div>

        {/* Search Bar */}
        <div style={{
          marginTop: '5rem',
          background: 'rgba(11, 20, 38, 0.8)',
          backdropFilter: 'blur(20px)',
          borderRadius: '12px',
          padding: '1.5rem',
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{ flex: 1, textAlign: 'left', borderRight: '1px solid rgba(255, 255, 255, 0.1)', paddingRight: '1rem' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.3rem', textTransform: 'uppercase' }}>Location</div>
            <div style={{ fontWeight: 600 }}>Search for City, State...</div>
          </div>
          <div style={{ flex: 1, textAlign: 'left', borderRight: '1px solid rgba(255, 255, 255, 0.1)', paddingRight: '1rem' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.3rem', textTransform: 'uppercase' }}>Type</div>
            <div style={{ fontWeight: 600 }}>Villa</div>
          </div>
          <div style={{ flex: 1, textAlign: 'left', borderRight: '1px solid rgba(255, 255, 255, 0.1)', paddingRight: '1rem' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.3rem', textTransform: 'uppercase' }}>Price Range</div>
            <div style={{ fontWeight: 600 }}>$500k - $2m</div>
          </div>
          <button className="btn btn-primary" style={{ padding: '0.8rem 2.5rem' }}>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
