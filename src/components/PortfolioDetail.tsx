import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface PortfolioItem {
  id: number;
  name: string;
  type: string;
  category: 'client' | 'creative';
  image: string;
  description: string;
}

const PortfolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      name: 'Drunk Elephant',
      type: 'Client Work',
      category: 'client',
      image: '/portfolioimages/drunk-elephant.png',
      description: 'A comprehensive email marketing campaign for Drunk Elephant skincare products, focusing on clean beauty and sustainable packaging. The design emphasizes the brand\'s commitment to effective, non-toxic skincare solutions with a modern, minimalist aesthetic that resonates with conscious consumers.'
    },
    {
      id: 2,
      name: 'Nike',
      type: 'Client Work',
      category: 'client',
      image: '/portfolioimages/nike.png',
      description: 'Dynamic email campaigns for Nike featuring athletic performance and lifestyle content. The design captures the energy and motivation that Nike represents, with bold typography, action-oriented imagery, and compelling calls-to-action that drive engagement and conversions.'
    },
    {
      id: 3,
      name: 'UGG',
      type: 'Client Work',
      category: 'client',
      image: '/portfolioimages/ugg.png',
      description: 'Cozy and comfortable email designs for UGG footwear and accessories. The campaigns highlight warmth, comfort, and seasonal fashion, creating an inviting atmosphere that reflects the brand\'s core values of quality, comfort, and timeless style.'
    },
    {
      id: 4,
      name: 'Zara',
      type: 'Creative Concepts',
      category: 'creative',
      image: '/portfolioimages/zara.png',
      description: 'Fashion-forward email designs for Zara\'s fast-fashion collections. The layouts showcase trend-driven content with clean, minimalist aesthetics that align with Zara\'s modern and sophisticated brand identity, emphasizing quick fashion updates and style inspiration.'
    }
  ];

  const item = portfolioItems.find(item => item.id === parseInt(id || '0'));

  if (!item) {
    return (
      <div>
        <Navbar />
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FEFDFD'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Portfolio Not Found</h1>
            <button 
              onClick={() => navigate('/')}
              style={{
                backgroundColor: '#DD4A48',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      {/* Main Content */}
      <div style={{
        minHeight: 'calc(100vh - 200px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        backgroundColor: '#FEFDFD'
      }} className="portfolio-detail-content">
        {/* Left Side - Content */}
        <div style={{
        //   padding: '4rem 2rem',
          display: 'flex',
          flexDirection: 'column',
        //   justifyContent: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: '1px solid #E5E7EB',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.875rem',
              color: '#6B7280',
              marginBottom: '2rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#DD4A48';
              e.currentTarget.style.color = '#DD4A48';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E5E7EB';
              e.currentTarget.style.color = '#6B7280';
            }}
          >
            ← Back to Portfolio
          </button>

          {/* Type Badge */}
          <div style={{
            backgroundColor: '#F3F4F6',
            color: '#6B7280',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: '500',
            display: 'inline-block',
            marginBottom: '1.5rem',
          }}>
            {item.type}
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '700',
            color: '#000',
            marginBottom: '1.5rem',
            fontFamily: 'Poppins, sans-serif',
            lineHeight: '1.2'
          }}>
            {item.name}
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            lineHeight: '1.7',
            margin: '0'
          }}>
            {item.description}
          </p>
        </div>

        {/* Right Side - Image */}
        <div style={{
          height: '100vh',
          position: 'sticky',
          top: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backgroundColor: '#F9FAFB'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'auto',
          }}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                // maxWidth: '100%',
                // maxHeight: '100%',
                // width: 'auto',
                // height: 'auto',
                // objectFit: 'none',
                // display: 'block'
              }}
            />
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @media (max-width: 768px) {
          .portfolio-detail-content {
            grid-template-columns: 1fr !important;
          }
          
          .portfolio-detail-content > div:last-child {
            height: 50vh !important;
            position: relative !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .portfolio-detail-content {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioDetail;
