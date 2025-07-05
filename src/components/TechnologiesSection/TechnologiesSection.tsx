import React, { useState } from 'react';
import {
  FaRobot,
  FaBrain,
  FaMicrochip,
  FaChartBar,
  FaLock,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAndroid,
  FaApple,
  FaDatabase,
  FaServer,
  FaCloud,
  FaDocker,
  FaAws,
  FaMagento,
  FaShopify,
  FaVuejs,
  FaAngular,
  FaJava,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaMicrosoft
} from 'react-icons/fa';

interface TechnologyItem {
  icon: JSX.Element;
  label: string;
}

const tabs = [
  'Emerging Tech',
  'Frontend',
  'Backend',
  'Mobile',
  'Database',
  'Frameworks',
  'Cloud',
  'DevOps',
  'Platforms',
  'Ecommerce'
] as const;

type Tab = typeof tabs[number];

const technologiesByTab: Record<Tab, TechnologyItem[]> = {
  'Emerging Tech': [
    { icon: <FaRobot className="text-purple-500" />, label: 'AI (Gen AI)' },
    { icon: <FaBrain className="text-pink-500" />, label: 'Machine Learning' },
    { icon: <FaMicrochip className="text-blue-500" />, label: 'Big Data' },
    { icon: <FaChartBar className="text-indigo-500" />, label: 'Data Intelligence' },
    { icon: <FaLock className="text-violet-500" />, label: 'AppSec' }
  ],
  Frontend: [
    { icon: <FaHtml5 className="text-orange-600" />, label: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-600" />, label: 'CSS3' },
    { icon: <FaJsSquare className="text-yellow-500" />, label: 'JavaScript' },
    { icon: <FaReact className="text-cyan-400" />, label: 'React' },
    { icon: <FaVuejs className="text-green-500" />, label: 'Vue.js' },
    { icon: <FaAngular className="text-red-600" />, label: 'Angular' }
  ],
  Backend: [
    { icon: <FaNodeJs className="text-green-600" />, label: 'Node.js' },
    { icon: <FaPython className="text-blue-500" />, label: 'Python' },
    { icon: <FaJava className="text-orange-500" />, label: 'Java' },
    { icon: <FaPhp className="text-indigo-600" />, label: 'PHP' }
  ],
  Mobile: [
    { icon: <FaAndroid className="text-green-600" />, label: 'Android' },
    { icon: <FaApple className="text-gray-800" />, label: 'iOS' },
    { icon: <FaReact className="text-cyan-400" />, label: 'React Native' },
    { icon: <FaMicrosoft className="text-blue-600" />, label: 'Xamarin' }
  ],
  Database: [
    { icon: <FaDatabase className="text-blue-800" />, label: 'MySQL' },
    { icon: <FaDatabase className="text-green-600" />, label: 'MongoDB' },
    { icon: <FaDatabase className="text-gray-500" />, label: 'PostgreSQL' },
    { icon: <FaDatabase className="text-orange-500" />, label: 'Firebase' }
  ],
  Frameworks: [
    { icon: <FaLaravel className="text-red-600" />, label: 'Laravel' },
    { icon: <FaReact className="text-cyan-400" />, label: 'Next.js' },
    { icon: <FaNodeJs className="text-green-600" />, label: 'Express.js' },
    { icon: <FaVuejs className="text-green-500" />, label: 'Nuxt.js' }
  ],
  Cloud: [
    { icon: <FaCloud className="text-gray-400" />, label: 'Google Cloud' },
    { icon: <FaAws className="text-yellow-600" />, label: 'AWS' },
    { icon: <FaMicrosoft className="text-blue-600" />, label: 'Azure' }
  ],
  DevOps: [
    { icon: <FaDocker className="text-blue-500" />, label: 'Docker' },
    { icon: <FaGitAlt className="text-orange-500" />, label: 'GitHub Actions' },
    { icon: <FaServer className="text-gray-600" />, label: 'CI/CD' }
  ],
  Platforms: [
    { icon: <FaShopify className="text-green-600" />, label: 'Shopify' },
    { icon: <FaMagento className="text-red-600" />, label: 'Magento' },
    { icon: <FaMicrosoft className="text-blue-700" />, label: 'Salesforce' }
  ],
  Ecommerce: [
    { icon: <FaShopify className="text-green-600" />, label: 'Shopify' },
    { icon: <FaMagento className="text-red-600" />, label: 'Magento' },
    { icon: <FaReact className="text-cyan-400" />, label: 'React Storefront' }
  ]
};

const TechnologiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Emerging Tech');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Enhanced Header */}
        <div className="mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Technologies & Platforms
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Cutting-edge tools and technologies that power our innovative solutions
          </p>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-3 shadow-2xl border border-gray-200/50 max-w-5xl">
            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative text-base sm:text-lg font-semibold px-6 py-3.5 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/30 transform scale-105'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/80'
                  }`}
                >
                  <span className="relative z-10">{tab}</span>
                  {activeTab === tab && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Technology Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
            {technologiesByTab[activeTab].map((tech, idx) => (
              <div
                key={idx}
                className={`group relative flex flex-col items-center gap-4 bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-3xl px-6 py-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2 justify-center min-h-[140px] ${
                  hoveredTech === tech.label ? 'ring-2 ring-blue-400 ring-opacity-60 scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredTech(tech.label)}
                onMouseLeave={() => setHoveredTech(null)}
                style={{
                  animationDelay: `${idx * 80}ms`,
                  animation: activeTab ? 'slideInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon with Scale Animation */}
                <div className="relative z-10 text-4xl sm:text-5xl group-hover:scale-125 transition-transform duration-300 group-hover:rotate-3">
                  {tech.icon}
                </div>
                
                {/* Label */}
                <span className="relative z-10 text-gray-800 font-semibold text-base sm:text-lg group-hover:text-gray-900 transition-colors duration-300 text-center leading-tight">
                  {tech.label}
                </span>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-120%] transition-transform duration-700 rounded-3xl"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-xl"></div>
              </div>
            ))}
          </div>
        </div>

        
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TechnologiesSection;