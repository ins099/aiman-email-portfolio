import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PortfolioItem {
    id: number;
    name: string;
    type: string;
    category: 'client' | 'creative';
    image: string;
}

const Portfolio: React.FC = () => {
    const [activeTab, setActiveTab] = useState('All');
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

    const filteredItems = activeTab === 'All'
        ? portfolioItems
        : portfolioItems.filter(item =>
            activeTab === 'Client Work' ? item.category === 'client' : item.category === 'creative'
        );

    const tabs = ['All', 'Client Work', 'Promotional'];

    return (
        <section id="portfolio" style={{
            padding: '4rem 2rem',
            backgroundColor: '#FEFDFD',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            {/* Section Header */}
            <div style={{
                textAlign: 'center',
                marginBottom: '3rem'
            }}>
                <div style={{
                    position: 'relative',
                    display: 'inline-block'
                }}>
                    <h4 style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        fontWeight: '600',
                        color: '#000',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontFamily: 'Poppins, sans-serif',
                        margin: '0 0 1rem 0'
                    }}>
                        Portfolio
                    </h4>
                </div>
            </div>

            {/* Tabs */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '3rem',
                gap: '2rem'
            }}>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: '500',
                            color: activeTab === tab ? '#DD4A48' : '#6B7280',
                            cursor: 'pointer',
                            padding: '0.5rem 0',
                            transition: 'color 0.3s ease',
                            position: 'relative'
                        }}
                        onMouseEnter={(e) => {
                            if (activeTab !== tab) {
                                e.currentTarget.style.color = '#DD4A48';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeTab !== tab) {
                                e.currentTarget.style.color = '#6B7280';
                            }
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Portfolio Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 320px))',
                gap: '2rem',
                alignItems: 'stretch',
                justifyContent: 'center'
            }}>
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => navigate(`/portfolio/${item.id}`)}
                        style={{
                            backgroundColor: '#FEFDFD',
                            border: '1px solid #E5E7EB',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        {/* Image Container */}
                        <div style={{
                            position: 'relative',
                            height: '250px',
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            {/* Blur Overlay */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                // padding: '0.5rem'
                            }}>
                                <div style={{
                                    width: '100%', height: '100%',
                                    display: 'flex', alignItems: 'flex-end', justifyContent: 'center', backgroundColor: 'transparent'
                                }}>
                                    {/* Portfolio Image */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: '70%',
                                            height: '90%',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            // borderRadius: '8px'
                                            borderTopLeftRadius: '8px',
                                            borderTopRightRadius: '8px'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{
                            padding: '1.5rem'
                        }}>
                            {/* Name and Type Row */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    color: '#000',
                                    margin: '0'
                                }}>
                                    {item.name}
                                </h3>
                                <div style={{
                                    backgroundColor: '#F3F4F6',
                                    color: '#6B7280',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '6px',
                                    fontSize: '0.875rem',
                                    fontWeight: '500'
                                }}>
                                    {item.type}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
