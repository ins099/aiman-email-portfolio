import React from 'react';

interface TechSkill {
  id: number;
  name: string;
  icon: string;
}

const Skills: React.FC = () => {
  const techSkills: TechSkill[] = [
    {
      id: 1,
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    },
    {
      id: 2,
      name: 'Klaviyo',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/klaviyo/klaviyo-original.svg'
    },
    {
      id: 3,
      name: 'MailChimp',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mailchimp/mailchimp-original.svg'
    },
    {
      id: 4,
      name: 'HubSpot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hubspot/hubspot-original.svg'
    },
    {
      id: 5,
      name: 'Canva',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
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
            Skill Set
          </h4>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center'
      }} className="skills-content">
        {/* Left Side - Description */}
        <div style={{
          padding: '1rem'
        }}>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            lineHeight: '1.7',
            margin: '0'
          }}>
            I believe great emails are a balance of creativity, strategy, and psychology. From coming up with ideas and designing layouts in Figma, to planning the right strategy, writing copy that connects, and looking at the data after every send. I've done it all. Each email has taught me how design, words, and timing work together to grab attention and build trust. I love seeing that mix of creativity and strategy come to life in the inbox.
          </p>
        </div>

        {/* Right Side - Technology Icons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          padding: '1rem'
        }} className="tech-icons-grid">
          {techSkills.map((skill) => (
            <div
              key={skill.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon */}
              <div style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.5rem'
              }}>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{
                    width: '32px',
                    height: '32px',
                    objectFit: 'contain'
                  }}
                  onError={(e) => {
                    // Fallback for missing icons
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div style="
                        width: 32px; 
                        height: 32px; 
                        background: #FF6B35; 
                        border-radius: 6px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 12px;
                      ">
                        ${skill.name.charAt(0)}
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Name */}
              <h4 style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#000',
                margin: '0',
                textAlign: 'center'
              }}>
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .skills-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .tech-icons-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.75rem !important;
          }
        }

        @media (max-width: 480px) {
          .tech-icons-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .skills-content {
            gap: 2rem !important;
          }
          
          .tech-icons-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
