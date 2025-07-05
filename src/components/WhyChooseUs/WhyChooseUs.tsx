import React from "react";
import {
  DollarSign,
  Clock,
  Shield,
  Package,
  Users,
  Award,
  Zap,
  Target,
  ChevronRight,
} from "lucide-react";

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="w-7 h-7 text-green-600" />,
      title: "Cost-Efficient Development",
      desc: "Optimize your budget with our streamlined processes and smart solutions. We deliver premium software development that maximizes value without compromising quality or outcomes.",
      highlight: "Save up to 40%",
    },
    {
      icon: <Clock className="w-7 h-7 text-green-600" />,
      title: "Guaranteed On-Time Delivery",
      desc: "Our proven project management methodology ensures punctual delivery. We maintain strict timelines while keeping your business goals and milestones perfectly aligned.",
      highlight: "98% On-Time Rate",
    },
    {
      icon: <Shield className="w-7 h-7 text-green-600" />,
      title: "Exceptional Client Retention",
      desc: "Our 95% client retention rate demonstrates unwavering commitment to quality and service excellence, building lasting partnerships through consistent results and trust.",
      highlight: "95% Retention",
    },
    {
      icon: <Package className="w-7 h-7 text-green-600" />,
      title: "Proven Track Record",
      desc: "With 500+ successfully delivered products across diverse industries, we bring battle-tested methodologies and deep insights to exceed industry standards.",
      highlight: "500+ Products",
    },
    {
      icon: <Award className="w-7 h-7 text-green-600" />,
      title: "Industry-Leading Experience",
      desc: "17+ years of software development excellence have equipped us with unparalleled expertise to tackle complex challenges and deliver innovative solutions.",
      highlight: "17+ Years",
    },
    {
      icon: <Target className="w-7 h-7 text-green-600" />,
      title: "Tailored Solutions",
      desc: "Every application is custom-built to your unique specifications, ensuring perfect alignment with your business objectives and competitive market positioning.",
      highlight: "100% Custom",
    },
    {
      icon: <Zap className="w-7 h-7 text-green-600" />,
      title: "Premium Quality Assurance",
      desc: "Rigorous testing protocols and industry-leading development standards ensure your product performs flawlessly and consistently exceeds user expectations.",
      highlight: "Zero-Defect Goal",
    },
    {
      icon: <Users className="w-7 h-7 text-green-600" />,
      title: "Expert In-House Team",
      desc: "Our diverse team of 350+ skilled professionals provides comprehensive end-to-end development services, delivering innovation and excellence at every project phase.",
      highlight: "350+ Experts",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0D1B2A] py-24 px-4 sm:px-8 lg:px-12">
      {/* Background decorative elements with specified styles */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-teal-400 rounded-full"></div>
      <div className="absolute top-20 right-20 w-24 h-24 border border-cyan-400 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 border border-emerald-400 rounded-full"></div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto relative z-10 text-white">
        {/* Header Section */}
        <div className="text-center mb-20 px-4">
          <div className="inline-flex items-center gap-2 bg-teal-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-teal-800">
            <Shield className="w-4 h-4" />
            Trusted by 500+ Companies Worldwide
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sonsvales
            </span>
            <br />
            As Your{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
                Trusted Partner
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full animate-bounce"></div>
            </span>
          </h2>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed mt-4">
            We combine deep technical expertise with proven business acumen to deliver software solutions that drive real results and accelerate your digital transformation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-4">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group bg-white bg-opacity-10 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-teal-400 hover:-translate-y-2 hover:scale-105 transform-gpu"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform hover:scale-110">
                  {React.cloneElement(feature.icon, { className: "w-7 h-7 text-white" })}
                </div>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 bg-teal-700 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 shadow-md hover:bg-teal-600 transition-colors cursor-pointer">
                  <div className="w-1.5 h-1.5 bg-teal-300 rounded-full"></div>
                  {feature.highlight}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 transition-colors hover:text-cyan-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 leading-relaxed text-sm mb-4">
                  {feature.desc}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-cyan-300 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:underline">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="bg-gradient-to-r from-cyan-700 to-blue-700 rounded-3xl p-8 mb-16 shadow-2xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-semibold text-white text-lg">
            <div className="transition-transform hover:scale-105 cursor-pointer">
              <div className="text-3xl mb-2 font-bold">500+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="transition-transform hover:scale-105 cursor-pointer">
              <div className="text-3xl mb-2 font-bold">95%</div>
              <div className="text-sm">Client Retention</div>
            </div>
            <div className="transition-transform hover:scale-105 cursor-pointer">
              <div className="text-3xl mb-2 font-bold">350+</div>
              <div className="text-sm">Expert Team</div>
            </div>
            <div className="transition-transform hover:scale-105 cursor-pointer">
              <div className="text-3xl mb-2 font-bold">17+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;