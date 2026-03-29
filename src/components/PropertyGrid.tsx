import React from 'react';

const properties = [
  {
    name: "The Gables Belgrano",
    location: "Argentina",
    sqft: "1.2k sqft",
    price: "$1,210,000",
    beds: 2,
    baths: 2,
    img: "/images/prop1.png",
    tag: "FOR SALE",
    tagColor: "var(--primary)"
  },
  {
    name: "Aura Bay Residences",
    location: "Maldives",
    sqft: "2.5k sqft",
    price: "$2,890,000",
    beds: 4,
    baths: 4.5,
    img: "/images/prop2.png",
    tag: "RESALE",
    tagColor: "#1e293b"
  },
  {
    name: "Hampton Modern",
    location: "New Jersey, USA",
    sqft: "1.8k sqft",
    price: "$1,350,000",
    beds: 3,
    baths: 3,
    img: "/images/prop3.png",
    tag: "PRE-ORDER",
    tagColor: "#b4945c"
  }
];

const PropertyGrid = () => {
  return (
    <section id="properties" className="container" style={{
      marginTop: '60px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '2rem'
      }}>
        <div style={{ maxWidth: '600px' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Curated Luxury <br/> Portfolios</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Explore our meticulously curated selection of premium residences, where architectural innovation meets timeless designers-each property is a testament of distinction.</p>
        </div>
        <a href="#" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>Search All Collections →</a>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2.5rem'
      }}>
        {properties.map((prop, idx) => (
          <div key={idx} style={{
            background: 'var(--card-bg)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}>
            <div style={{ position: 'relative', height: '280px' }}>
              <img 
                src={prop.img} 
                alt={prop.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                background: prop.tagColor,
                color: 'white',
                padding: '0.4rem 1rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                borderRadius: '4px'
              }}>{prop.tag}</span>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                color: 'var(--accent)',
                fontSize: '1.4rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}>{prop.price}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>{prop.name}</h3>
              <div style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}>{prop.location} • {prop.sqft}</div>
              <div style={{
                display: 'flex',
                gap: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '1rem'
              }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{prop.beds} Beds</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{prop.baths} Baths</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyGrid;
