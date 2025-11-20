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
      className="py-12 md:py-16 px-4 bg-[#002349]"
    >
      <style>{`
        @keyframes scrolling {
          0% {
            transform: translateX(80%);
          }
          100% {
            transform: translateX(-20%);
          }
        }

        .slider-items {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          animation: scrolling 20s linear infinite;
        }

        .slider-items:hover {
          animation-play-state: paused;
        }

        .slider-items img {
          width: 12%;
          margin: 20px;
          object-fit: contain;
        }
      `}</style>

      <div className="grid place-items-center w-full gap-6">
        <h1 className="text-4xl md:text-4xl font-medium text-[white]">
          Our Partners
        </h1>
        <div className="flex justify-center items-center w-11/12 md:w-4/5 overflow-hidden bg-white rounded-lg shadow-lg backdrop-blur-lg border border-white border-opacity-40 md:py-8">
          <div className="slider-items">
            {[...partners, ...partners].map((partner, index) => (
              <Image
                key={index}
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={80}
                priority={index < 3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
