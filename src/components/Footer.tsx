import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #00002D 0%, #00001A 100%)',
      padding: '4rem 2rem 2rem',
      marginTop: '4rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'left'
      }}>
        {/* Main Content */}
        <div style={{
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '1.5rem',
            fontFamily: 'Degular, sans-serif',
            lineHeight: '1.2'
          }}>
            Let's work together
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#B0B0B0',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 0 2rem 0',
            textAlign: 'left'
          }}>
            Whether you're a brand looking to level up your email game or a company that wants to connect better with your audience, I'd love to help. Reach out via{' '}
            <a 
              href="https://linkedin.com/in/aiman" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#FF6B35',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C69'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FF6B35'}
            >
              LinkedIn
            </a>
            {' '}or email me directly to chat about your goals.
          </p>
        </div>

        {/* Contact Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '2rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <a 
            href="mailto:contact@aiman.com" 
            style={{
              color: '#B0B0B0',
              textDecoration: 'none',
              fontSize: '0.95rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B35'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}
          >
            Email Me
          </a>
          <a 
            href="https://linkedin.com/in/aiman" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#B0B0B0',
              textDecoration: 'none',
              fontSize: '0.95rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B35'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid #333333'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#808080',
            margin: '0'
          }}>
            © 2024 Aiman Iqbal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
