import React from 'react';

const Hero: React.FC = () => {
  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#FEFDFD',
      gap: '30px',
      textAlign: 'center',
      position: 'relative'
    }}>
      {/* Decorative Image - Top Right */}
      {/* <img 
        src="https://cdn.prod.website-files.com/6549ba20e2cd0407d57858d6/664c227fa244e6479a46b173_28.svg"
        alt="Decorative element"
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '112px',
          height: 'auto',
          zIndex: 1,
          opacity: 0.8
        }}
      />

      <img 
        src="https://cdn.prod.website-files.com/6549ba20e2cd0407d57858d6/6597ad0b6f19659f0eabd00e_67.svg"
        alt="Decorative element"
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '8%',
          width: '130px',
          height: 'auto',
          zIndex: 1,
          opacity: 0.8
        }} */}
      {/* /> */}

      {/* Badge */}
      <div style={{
        backgroundColor: '#C0D8C0',
        padding: '0.5rem 1rem',
        borderRadius: '25px',
        marginBottom: '0.5rem',
        fontSize: '14px',
        fontWeight: '500',
        color: '#000',
        zIndex: 2,
        position: 'relative'
      }}>
        Email Design & Strategy Specialist
      </div>

      {/* Main Heading */}
      <h1 style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 'clamp(2.0rem, 4.5vw, 3.5rem)',
        fontWeight: '700',
        lineHeight: '1.2',
        // marginBottom: '0.75rem',
        color: '#000',
        maxWidth: '800px',
        margin: '0',
        zIndex: 2,
        position: 'relative'
      }}>
        Designing emails people
        actually want to read.
      </h1>

      {/* Sub Text */}
      <p style={{
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: '#6B7280',
        fontWeight: '400',
        maxWidth: '600px',
        lineHeight: '1.6',
        margin: '0',
        marginTop: '0.5rem',
        zIndex: 2,
        position: 'relative'
      }}>
        Great emails are strategy, storytelling and style in sync.
      </p>
    </section>
  );
};

export default Hero;
