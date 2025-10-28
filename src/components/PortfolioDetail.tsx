import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface PortfolioItem {
  id: number;
  name: string;
  type: string;
  category: 'client' | 'creative';
  image: string;
}

const PortfolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const portfolioItems: PortfolioItem[] = [
    // Work / Client category items
    {
      id: 1,
      name: 'Riwaya',
      type: 'Promotional',
      category: 'client',
      image: '/portfolioimages/work/work1.png'
    },
    {
      id: 2,
      name: 'Riwaya',
      type: 'Promotion',
      category: 'client',
      image: '/portfolioimages/work/work2.png'
    },
    {
      id: 3,
      name: 'Riwaya',
      type: 'Promotional',
      category: 'client',
      image: '/portfolioimages/work/work6.png',
    },
    {
      id: 7,
      name: 'Riwaya',
      type: 'Promotional',
      category: 'client',
      image: '/portfolioimages/work/work7.png'
    },
    {
      id: 4,
      name: 'Kirnell',
      type: 'Promotional',
      category: 'client',
      image: '/portfolioimages/work/work4.png'
    },
    {
      id: 5,
      name: 'Kirnell',
      type: 'Promotional',
      category: 'client',
      image: '/portfolioimages/work/work5.png'
    },
    {
      id: 6,
      name: 'Kirnell',
      type: 'Promotional',
      category: 'client',
      image: '/portfolioimages/work/work3.png'
    },
    // Creative category items
    {
      id: 8,
      name: 'Nike',
      type: 'Promotional',
      category: 'creative',
      image: '/portfolioimages/creative/nike.png'
    },
    {
      id: 9,
      name: 'Zara',
      type: 'Promotional',
      category: 'creative',
      image: '/portfolioimages/creative/zara.png'
    },
    {
      id: 10,
      name: 'Drunk Elephant',
      type: 'Promotional',
      category: 'creative',
      image: '/portfolioimages/creative/drunk-elephant.png'
    },
    {
      id: 11,
      name: 'UGG',
      type: 'Promotional',
      category: 'creative',
      image: '/portfolioimages/creative/UGG.png'
    },
    {
      id: 12,
      name: 'UGG',
      type: 'Promotional',
      category: 'creative',
      image: '/portfolioimages/creative/UGG-2.png'
    },
    {
      id: 13,
      name: 'Happy Socks',
      type: 'Promotional',
      category: 'creative',
      image: '/portfolioimages/creative/happy-socks.png'
    },
    {
      id: 14,
      name: 'Milk Cosmetics',
      type: 'Promotional',
      category: 'creative',
      image: '/portfolioimages/creative/milk-cosmetics.png'
    },
    {
      id: 15,
      name: 'The Ordinary',
      type: 'Promotional',
      category: 'creative',
      image: '/portfolioimages/creative/the-ordinary.png'
    }
  ];

  const item = portfolioItems.find(item => item.id === parseInt(id || '0'));

  if (!item) {
    return (
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
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FEFDFD' }}>
      {/* Main Content */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '3rem 2rem'
      }}>
        {/* Heading */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            color: '#000',
            margin: '0 0 1rem 0',
            fontFamily: 'Poppins, sans-serif'
          }}>
            {item.name}
          </h1>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#F3F4F6',
            color: '#6B7280',
            padding: '0.5rem 5rem',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}>
            {item.type}
          </div>
        </div>

        {/* Image Container - Scrollable with Shadow */}
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <img
            src={item.image}
            alt={item.name}
            style={{
              maxWidth: '600px',
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              borderRadius: '12px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
