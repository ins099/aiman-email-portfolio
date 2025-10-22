import React from 'react';

const Hero: React.FC = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#FEFDFD',
      textAlign: 'center'
    }}>
      {/* Badge */}
      <div style={{
        backgroundColor: '#7BEE9F',
        padding: '0.5rem 1rem',
        borderRadius: '25px',
        marginBottom: '0.5rem',
        fontSize: '14px',
        fontWeight: '500',
        color: '#000'
      }}>
        Email Design & Strategy Specialist
      </div>

      {/* Main Heading */}
      <h1 style={{
        fontFamily: 'Degular, sans-serif',
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: '700',
        lineHeight: '1.2',
        // marginBottom: '0.75rem',
        color: '#000',
        maxWidth: '800px',
        margin: '0',
      }}>
        Designing emails people<br />
        actually want to read.
      </h1>

      {/* Sub Text */}
      <p style={{
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: '#6B7280',
        fontWeight: '400',
        maxWidth: '600px',
        lineHeight: '1.6'
      }}>
        Great emails are strategy, storytelling and style in sync.
      </p>
    </section>
  );
};

export default Hero;
