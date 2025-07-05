import React from 'react';
import {
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaCloud,
  FaCube,
  FaSatellite,
  FaPalette,
  FaShieldAlt,
  FaSearch
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  bullets: string[];
}

const services: Service[] = [
  {
    icon: <FaGlobe size={28} />,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies',
    bullets: ['React/Next.js', 'Node.js APIs', 'Cloud Deployment']
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences',
    bullets: ['React Native', 'iOS/Android', 'App Store Optimization']
  },
  {
    icon: <FaRobot size={28} />,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that learn, adapt, and transform your business operations',
    bullets: ['TensorFlow', 'Computer Vision', 'NLP Solutions']
  },
  {
    icon: <FaCloud size={28} />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps solutions for modern businesses',
    bullets: ['AWS/Azure', 'Kubernetes', 'CI/CD Pipelines']
  },
  {
    icon: <FaCube size={28} />,
    title: 'Blockchain',
    description: 'Decentralized applications and smart contracts for the future of finance',
    bullets: ['Smart Contracts', 'DeFi Protocols', 'NFT Platforms']
  },
  {
    icon: <FaSatellite size={28} />,
    title: 'IoT Solutions',
    description: 'Connected device ecosystems that bridge the physical and digital worlds',
    bullets: ['Device Integration', 'Real-time Analytics', 'Edge Computing']
  },
  {
    icon: <FaPalette size={28} />,
    title: 'UI/UX Design',
    description: 'Crafting intuitive, beautiful, and user-friendly digital experiences',
    bullets: ['Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: 'Cybersecurity',
    description: 'Securing systems and data through proactive defense strategies and audits',
    bullets: ['Penetration Testing', 'Threat Detection', 'Data Privacy']
  },
  {
    icon: <FaSearch size={28} />,
    title: 'SEO & Marketing',
    description: 'Boosting your visibility and reach with modern digital marketing strategies',
    bullets: ['SEO Optimization', 'Content Strategy', 'Campaign Analytics']
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-teal-400 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-cyan-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border border-emerald-400 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4">
          Our Services
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          What we offer to help your business grow and thrive in the digital landscape
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-teal-400/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all duration-300 hover:transform hover:scale-105"
          >
            {/* Icon with gradient background */}
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-teal-400/30 group-hover:to-cyan-400/30 transition-all duration-300">
              <div className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                {service.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-100 transition-colors duration-300">
              {service.title}
            </h3>
            
            <p className="text-slate-300 mb-4 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
              {service.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {service.bullets.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block border border-teal-400/60 text-teal-300 text-xs px-3 py-1.5 rounded-full bg-teal-500/10 hover:bg-teal-500/20 hover:border-teal-400/80 transition-all duration-200"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-teal-500/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default ServicesSection;