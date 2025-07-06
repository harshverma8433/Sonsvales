import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div style={{
  background: 'linear-gradient(180deg, #003366 0%, #001933 100%)'
}} className="text-white min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-2xl">
            Sonsvales Solution
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-slate-300">
            Building Tomorrow's Software Today
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mb-12 text-slate-300 leading-relaxed">
            We craft cutting-edge software solutions that transform ideas into
            reality. Join the future of technology with our innovative
            development approach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Let's Build the Future Together
            </button>
            <button className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-md">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;