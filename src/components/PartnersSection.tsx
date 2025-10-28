'use client';

import Image from 'next/image';

const PartnersSection = () => {
  const partners = [
    { name: 'Questrade', logo: '/images/partner_logos/Questrade_logo.svg.png' },
    { name: 'Wealthsimple', logo: '/images/partner_logos/wealthsimple.svg' },
    { name: 'RBC Insurance', logo: '/images/partner_logos/rbc.jpg' },
    { name: 'Canada Life', logo: '/images/partner_logos/canadalife.png' },
    { name: 'Empire Life', logo: '/images/partner_logos/empirelife.png' },
    { name: 'Nest Wealth', logo: '/images/partner_logos/nestwealth.png' },
    { name: 'Just Wealth', logo: '/images/partner_logos/justwealth.png' },
    { name: 'Blue Cross', logo: '/images/partner_logos/bluecross.png' },
    { name: 'Manulife', logo: '/images/partner_logos/manulife.png' },
    { name: 'IA Financial', logo: '/images/partner_logos/iafinancial.jpg' },
  ];

  return (
    <section
      id="partners"
      className="py-16 md:py-24 px-4 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#031931] mb-4">
            Our Partner Network
          </h2>
          <p className="text-[#5a5a57] text-lg max-w-2xl mx-auto">
            We work with Canada's leading financial institutions to deliver the best solutions for our clients.
          </p>
        </div>

        {/* Continuous Scrolling Banner */}
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-white via-white to-white py-8">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-50% - 1000px));
              }
            }
            
            .partners-scroll-container {
              display: flex;
              animation: scroll 20s linear infinite;
              width: 200%;
              gap: 20px;
            }
            
            .partners-scroll-container:hover {
              animation-play-state: paused;
            }
            
            .partner-item {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              width: calc(100% / 5);
            }
          `}</style>

          <div className="partners-scroll-container">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="partner-item">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={600}
                  height={300}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
