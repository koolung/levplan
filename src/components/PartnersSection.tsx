'use client';

import Image from 'next/image';

const PartnersSection = () => {
  const partners = [
    { name: 'Nest Wealth', logo: '/images/partner_logos/nestwealth.png' },
    { name: 'PPI', logo: '/images/partner_logos/ppi.png' },
    { name: 'Assumption Life', logo: '/images/partner_logos/assumption.png' },
    { name: 'IA Financial', logo: '/images/partner_logos/iafinancial.jpg' },
    { name: 'Manulife', logo: '/images/partner_logos/manulife.png' },
    { name: 'Canada Life', logo: '/images/partner_logos/canadalife.png' },
    { name: 'Canada Protection Plan', logo: '/images/partner_logos/cpp.png' },
    { name: 'Empire Life', logo: '/images/partner_logos/empirelife.png' },
    { name: 'RBC Insurance', logo: '/images/partner_logos/rbc.jpg' },
    { name: 'Razorplan', logo: '/images/partner_logos/razorplan.png' },
    { name: 'Blue Cross', logo: '/images/partner_logos/bluecross.png' },
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
                <hr className="w-24 border-t-4 border-[#e7a832] mx-auto mb-6" />

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
