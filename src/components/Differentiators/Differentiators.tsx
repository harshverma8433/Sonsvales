import { it } from 'node:test';
import React, { useState, useEffect, useRef } from 'react';

interface DifferentiatorItem {
  title: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  bgGradient: string;
}

const differentiators: DifferentiatorItem[] = [
  {
    title: 'Artificial Intelligence',
    description:
      'We specialize in customizing AI solutions that fit our clients\' business objectives. We release data from bottlenecks to streamline workflows and open the path for your business to experience exponential growth and automation.',
    image: '/images/ai.png',
    icon: '🤖',
    color: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50'
  },
  {
    title: 'Low Code/ No Code Development',
    description:
      'Experience the power of low-code/no-code solutions which accelerate time-to-market while reducing development overhead. Our intuitive platforms allow rapid digital transformation with minimal engineering effort.',
    image: '/images/lowcode.png',
    icon: '⚡',
    color: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-50 to-blue-50'
  },
  {
    title: 'IoT Solution',
    description:
      'Leverage our advanced expertise in connecting physical and digital dimensions. We design secure, data-driven ecosystems using edge devices, cloud integration, and real-time monitoring with robust IoT stacks.',
    image: '/images/iot.png',
    icon: '🌐',
    color: 'from-teal-500 to-green-600',
    bgGradient: 'from-teal-50 to-green-50'
  },
  {
    title: 'Custom Software Development',
    description:
      'Our technical expertise allows us to create tailored solutions aligned with your business logic. From platforms to CRM & ERP systems, we deliver scalable, future-ready architectures built for long-term success.',
    image: '/images/software.png',
    icon: '💻',
    color: 'from-blue-500 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50'
  },
];

const Differentiators: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(differentiators.length).fill(false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0D1B2A] py-16 px-4 sm:px-8 lg:px-12">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-200/10 to-teal-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-200/10 to-blue-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-teal-200/10 to-green-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-6">
          <h2 className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4 tracking-tight">
            Our Differentiators
          </h2>
          <div className="h-2 w-24 mx-auto bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full animate-pulse"></div>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-200 leading-relaxed">
            Discover what sets us apart in the digital transformation landscape
          </p>
        </div>

        {/* Cards Grid */}
        <div className="space-y-16">
          {differentiators.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`group relative transform transition-all duration-1000 ${visibleItems[index]
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative bg-white/10 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 transition-transform duration-500 ${hoveredIndex === index ? 'scale-105 shadow-2xl' : ''
                  }`}
              >
                {/* Background gradient overlay - less prominent on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br  ${item.bgGradient} opacity-20 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-10' : 'opacity-20'
                    } rounded-3xl`}
                ></div>

                {/* Content container */}
                <div
                  className={`relative flex flex-col lg:flex-row  items-center gap-12 p-8 lg:p-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse lg:gap-12  lg:items-center lg:justify-evenly ' : ''
                    }`}
                >
                  {/* Text Content */}
                  <div className="lg:w-1/2 space-y-6 text-center lg:text-left z-10">
                    {/* Icon + Title */}
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                      <div
                        className={`text-4xl p-4 rounded-2xl shadow-lg transform transition-transform duration-300 bg-gradient-to-r ${item.color} text-white`}
                      >
                        {item.icon}
                        {/* <img src={item.image} alt="ai.jpeg" /> */}
                      </div>
                      <h3
                        className={`text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    {/* Description */}
                    <p
                      className={`text-slate-200 text-lg leading-relaxed transition-colors duration-300 group-hover:text-slate-100`}
                    >
                      {item.description}
                    </p>
                    {/* Explore Button */}
                    <div className="pt-4">
                      <button
                        className={`relative overflow-hidden bg-gradient-to-r ${item.color} text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Explore More
                          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </span>
                        <div
                          className={`absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        ></div>
                      </button>
                    </div>
                  </div>

                  {/* Image with floating effects */}
                  <div className={`lg:w-1/2  flex lg:justify-end  z-10 ${index % 2 !== 0 ? 'lg:flex lg:w-1/2 lg:justify-center   ' : ''
                    } ` }>
                    <div className="relative group/image">
                      {/* Decorative rings - subdued on hover */}
                      
                    

                      {/* Image container */}
                      <div className="relative  transition-shadow duration-500 transform hover:-translate-y-2">
                        <div
                          className="w- 96 h-96 r rounded-3xl overflow-hidden   rounded-2xl flex items-center justify-center text-6xl transform transition-transform duration-500 hover:scale-110"
                        >
                          <img className='w-full h-full ' src={item.image} alt="" />
                        </div>
                        {/* Floating particles */}
                        {/* <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-bounce"></div>
                        <div className="absolute bottom-6 left-6 w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-300"></div>
                        <div className="absolute top-1/2 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-b-full">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} origin-left scale-x-0 transition-transform duration-1000 ease-in-out ${hoveredIndex === index ? 'scale-x-100' : ''
                      }`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;