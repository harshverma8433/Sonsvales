import React from 'react';

const logos: string[] = [
  '/logos/adcb.png',
  '/logos/hyundai.png',
  '/logos/versa.png',
  '/logos/coca-cola.png',
  '/logos/mercedes.png',
  '/logos/icici.png',
  '/logos/abp.png',
  '/logos/grameenphone.png',
  '/logos/jcb.png',
  '/logos/stc.png',
  '/logos/cisco.png',
  '/logos/trueid.png',
];

const TrustedSection: React.FC = () => {
  return (
    <section className="py-10 px-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <span className="inline-block border border-gray-300 rounded-full px-4 py-2 text-lg font-medium">
          <span className="text-orange-600 font-semibold">Trusted</span> by Funded Startups to{' '}
          <span className="text-green-600 font-semibold">Fortune 500+ Brands</span> in 12+ Countries.
        </span>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center max-w-6xl mx-auto">
        {logos.map((logo: string, index: number) => (
          <div key={index} className="flex justify-center items-center">
            <img src={logo} alt={`logo-${index}`} className="h-12 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedSection;
