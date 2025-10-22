import React, { useState } from 'react';
import { LinkedinOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('What do I do');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = ['What do I do', 'Skills', 'Portfolio', 'Contact me'];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    // You can replace this with actual resume download logic
    console.log('Download resume clicked');
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: '#FEFDFD',
      padding: '1rem 2rem',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative'
      }}>
        {/* Left side - LinkedIn icon and Download Resume button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flex: '1'
        }}>
          <LinkedinOutlined 
            style={{ 
              fontSize: '24px', 
              color: '#000',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B35'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
          />
          <button
            onClick={handleDownloadResume}
            className="download-resume-btn"
            style={{
              background: 'none',
              border: '2px solid #000',
              padding: '0.5rem 1rem',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: '#000',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#000';
              e.currentTarget.style.color = '#FEFDFD';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#000';
            }}
          >
            <span className="download-text">Download Resume</span>
          </button>
        </div>

        {/* Center - Name */}
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#000',
          letterSpacing: '1px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          Aiman Iqbal
        </div>

        {/* Right side - Desktop tabs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          flex: '1',
          justifyContent: 'flex-end'
        }} className="desktop-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '16px',
                fontWeight: '500',
                color: activeTab === tab ? '#FF6B35' : '#000',
                cursor: 'pointer',
                padding: '0.5rem 0',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.color = '#FF6B35';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.color = '#000';
                }
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <div style={{
          display: 'none',
          alignItems: 'center'
        }} className="mobile-menu-button">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              color: '#000',
              transition: 'transform 0.3s ease'
            }}
          >
            <MenuOutlined style={{ 
              transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div style={{
        display: isMobileMenuOpen ? 'block' : 'none',
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: '#FEFDFD',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        padding: '1rem 2rem',
        animation: isMobileMenuOpen ? 'slideDown 0.3s ease' : 'slideUp 0.3s ease'
      }} className="mobile-menu">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            style={{
              display: 'block',
              width: '100%',
              background: 'none',
              border: 'none',
              fontSize: '18px',
              fontWeight: '500',
              color: activeTab === tab ? '#FF6B35' : '#000',
              cursor: 'pointer',
              padding: '1rem 0',
              textAlign: 'left',
              borderBottom: '1px solid #f0f0f0',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab) {
                e.currentTarget.style.color = '#FF6B35';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab) {
                e.currentTarget.style.color = '#000';
              }
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        @media (max-width: 1024px) {
          .desktop-tabs {
            display: none !important;
          }
          
          .mobile-menu-button {
            display: flex !important;
          }
        }

        @media (max-width: 768px) {
          .download-resume-btn {
            padding: 0.5rem !important;
            border-radius: 50% !important;
            width: 40px !important;
            height: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .download-resume-btn::after {
            content: "↓";
            font-size: 16px;
            font-weight: bold;
          }

          .download-text {
            display: none !important;
          }
        }

        @media (min-width: 1025px) {
          .mobile-menu-button {
            display: none !important;
          }

          .download-resume-btn::after {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
