import React, { useState, useEffect, useRef } from 'react';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageCarousel: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Local card images from /public/cards folder
  const images: CarouselImage[] = [
    {
      id: 1,
      src: '/cards/card1.png',
      alt: 'Card Design 1',
      width: 400,
      height: 400
    },
    {
      id: 2,
      src: '/cards/card2.png',
      alt: 'Card Design 2',
      width: 400,
      height: 400
    },
    {
      id: 3,
      src: '/cards/card3.png',
      alt: 'Card Design 3',
      width: 400,
      height: 400
    },
    {
      id: 4,
      src: '/cards/card4.png',
      alt: 'Card Design 4',
      width: 400,
      height: 400
    },
    {
      id: 5,
      src: '/cards/card5.png',
      alt: 'Card Design 5',
      width: 400,
      height: 400
    }
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform based on scroll position
  const getTransform = () => {
    const scrollFactor = 0.5; // Adjust this to control scroll sensitivity
    const translateX = -(scrollY * scrollFactor);
    return `translate3d(${translateX}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
  };

  return (
    <section style={{
      padding: '4rem 0',
      backgroundColor: '#FEFDFD',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div style={{
        width: '100%',
        margin: '0',
        padding: '0'
      }}>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          style={{
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div 
            style={{
              display: 'flex',
              gap: '1.rem',
              willChange: 'transform',
              transform: getTransform(),
              transformStyle: 'preserve-3d',
              transition: 'transform 0.1s ease-out'
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                style={{
                  flexShrink: 0,
                  width: 'clamp(300px, 25vw, 400px)',
                  height: 'clamp(300px, 25vw, 400px)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  // boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  // e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  // e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
