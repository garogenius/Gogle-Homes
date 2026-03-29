import React from 'react';

const Legacy = () => {
  return (
    <section style={{
      padding: '120px 0',
      background: 'rgba(255, 255, 255, 0.02)',
      marginTop: '80px'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(400px, 1fr) 1.2fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div>
          <span className="section-subtitle">Innovation • Design • Craft</span>
          <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: '1.1' }}>
            We don't just build homes. We craft <span style={{ color: 'var(--primary)' }}>Legacies.</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'var(--text-muted)',
            marginBottom: '2.5rem'
          }}>
            At GogleHomes, we believe in architectural excellence that stands the test of time. Every residence we create is a masterpiece of precision, blending futuristic design with uncompromising comfort and sustainable luxury.
          </p>
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '10px', height: '10px', background: 'var(--primary)', borderRadius: '50%' }}></div>
              <span style={{ fontWeight: 500 }}>Bespoke Architectural Design</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '10px', height: '10px', background: 'var(--primary)', borderRadius: '50%' }}></div>
              <span style={{ fontWeight: 500 }}>Sustainable & Eco-Friendly Development</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '10px', height: '10px', background: 'var(--primary)', borderRadius: '50%' }}></div>
              <span style={{ fontWeight: 500 }}>Advanced Smart Home Systems</span>
            </div>
          </div>
          <button className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>Learn More About Our Legacy</button>
        </div>
        
        <div style={{ position: 'relative' }}>
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Craftsmanship" 
            style={{
              width: '100%',
              borderRadius: '24px',
              boxShadow: '0 40px 80px rgba(0, 0, 0, 0.6)'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '-40px',
            left: '40px',
            background: 'var(--primary)',
            padding: '2rem',
            borderRadius: '16px',
            maxWidth: '220px',
            boxShadow: '0 20px 40px rgba(185, 28, 28, 0.4)'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>25+</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years of Excellence in Architectural Innovation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
