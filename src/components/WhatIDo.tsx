import React from 'react';
import {
    MailOutlined,
    EditOutlined,
    CalendarOutlined,
    SettingOutlined,
    ExperimentOutlined,
    BarChartOutlined
} from '@ant-design/icons';

interface ServiceCard {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

const WhatIDo: React.FC = () => {
    const services: ServiceCard[] = [
        {
            id: 1,
            icon: <MailOutlined style={{ fontSize: '2rem', color: '#FF6B35' }} />,
            title: 'Email Design',
            description: 'Clean, conversion-focused emails that look great on every device and reflect your brand\'s identity.'
        },
        {
            id: 2,
            icon: <EditOutlined style={{ fontSize: '2rem', color: '#FF6B35' }} />,
            title: 'Copywriting',
            description: 'Copy that sounds natural, builds connection, and guides readers to take action without the pushiness.'
        },
        {
            id: 3,
            icon: <CalendarOutlined style={{ fontSize: '2rem', color: '#FF6B35' }} />,
            title: 'Content Planning',
            description: 'Content calendars that ensure consistent, purposeful communication throughout the customer journey.'
        },
        {
            id: 4,
            icon: <SettingOutlined style={{ fontSize: '2rem', color: '#FF6B35' }} />,
            title: 'Automation & Segmentation',
            description: 'Automated and segmented flows that deliver the right message to the right audience at the right time.'
        },
        {
            id: 5,
            icon: <ExperimentOutlined style={{ fontSize: '2rem', color: '#FF6B35' }} />,
            title: 'A/B Testing & Optimisation',
            description: 'Test, measure and refine every element, from subject lines to send times, to increase engagement and conversions.'
        },
        {
            id: 6,
            icon: <BarChartOutlined style={{ fontSize: '2rem', color: '#FF6B35' }} />,
            title: 'Data Analysis',
            description: 'Use performance data to refine campaigns, uncover insights, and help brands make smarter email marketing decisions.'
        }
    ];

    return (
        <section style={{
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
                         fontFamily: 'Degular, sans-serif',
                         margin: '0 0 1rem 0'
                     }}>
                         What Do I Do?
                     </h4>
                 </div>
             </div>

            {/* Cards Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                alignItems: 'stretch'
            }}>
                {services.map((service) => (
                    <div
                        key={service.id}
                        style={{
                            backgroundColor: '#FEFDFD',
                            border: '1px solid #E5E7EB',
                            borderRadius: '12px',
                            padding: '2rem 1.5rem',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '250px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#FF6B35';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 53, 0.1)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#E5E7EB';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        {/* Icon */}
                        <div style={{
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {service.icon}
                        </div>

                        {/* Title */}
                        <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            color: '#000',
                            marginBottom: '0.5rem',
                            margin: '0 0 1rem 0'
                        }}>
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p style={{
                            fontSize: '0.95rem',
                            color: '#6B7280',
                            lineHeight: '1.6',
                            margin: '0',
                            flex: '1',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 1025px) {
          .cards-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
        </section>
    );
};

export default WhatIDo;
