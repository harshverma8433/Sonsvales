
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className=" inset-0 min-screen  pointer-events-none">
      {/* Main gradient background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br min-h-[10px] from-slate-900 via-slate-800 to-slate-900" /> */}
      

      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating squares */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-blue-500/30 animate-float" />
        <div className="absolute top-32 right-32 w-12 h-12 border-2 border-purple-500/40 animate-float-reverse" />
        <div className="absolute bottom-40 left-40 w-20 h-20 border-2 border-blue-400/25 animate-float-slow" />
        
        {/* Medium squares */}
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-purple-500/20 animate-float-reverse" />
        <div className="absolute bottom-60 right-1/4 w-10 h-10 bg-blue-500/15 animate-float" />
        
        {/* Circles */}
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full border border-purple-400/30 animate-pulse-glow" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-float" />
        <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full border-2 border-pink-500/40 animate-float-reverse" />
        <div className="absolute bottom-20 right-40 w-32 h-32 rounded-full border border-green-400/20 animate-float-slow" />
        
        {/* Small floating particles */}
        <div className="absolute top-24 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-twinkle" />
        <div className="absolute top-1/3 left-20 w-1 h-1 bg-purple-400 rounded-full animate-twinkle-slow" />
        <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-pink-400 rounded-full animate-twinkle" />
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-twinkle-slow" />
        <div className="absolute bottom-40 left-1/2 w-2 h-2 bg-green-400 rounded-full animate-twinkle" />
        
        {/* Additional scattered particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400/60 rounded-full animate-twinkle`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Connecting lines */}
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse-glow" style={{ transform: 'rotate(45deg)' }} />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse-glow" style={{ transform: 'rotate(-30deg)' }} />
        <div className="absolute top-1/2 left-1/2 w-40 h-px bg-gradient-to-r from-transparent via-pink-400/20 to-transparent animate-pulse-glow" style={{ transform: 'rotate(120deg)' }} />
      </div>
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30" />
    </div>
  );
};

export default AnimatedBackground;
