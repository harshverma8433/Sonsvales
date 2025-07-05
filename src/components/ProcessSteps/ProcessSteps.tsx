import React from 'react';

const ProcessSteps: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-700 p-8 relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 mb-24">
        <h2 className="text-gray-400 mb-2 text-lg">How We Work</h2>
        <h1 className="text-white text-3xl pb-10 md:text-4xl font-bold mb-8">
          Our End-To-End Software Product Development Process
        </h1>
      </div>

      {/* Curved Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1400 800">
        <path d="M 150 230 Q 300 0 450 300" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
        <path d="M 420 320 Q 600 30 730 350" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
        <path d="M 690 460 Q 800 50 1000 420" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
        <path d="M 990 420 Q 1100 120 1300 500" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
      </svg>

      {/* "Process of work" labels */}
      <div className="absolute z-20 text-white text-xs font-medium space-y-4 pointer-events-none">
        <div className="absolute left-[220px] -top-[100px] bg-white flex justify-center items-center text-gray-700 rounded-full w-28 h-8 shadow">
          Process of work
        </div>
        <div className="absolute left-[500px] -top-[50px] bg-white flex justify-center items-center text-gray-700 rounded-full w-28 h-8 shadow">
          Process of work
        </div>
        <div className="absolute left-[770px] top-[10px] bg-white flex justify-center items-center text-gray-700 rounded-full w-28 h-8 shadow">
          Process of work
        </div>
        <div className="absolute left-[1050px] top-[50px] bg-white flex justify-center items-center text-gray-700 rounded-full w-28 h-8 shadow">
          Process of work
        </div>
      </div>

      {/* Process Cards */}
      <div className="relative z-10 flex flex-wrap justify-center items-start space-x-10">
        {/* Step 1 - Strategy */}
        <div className="relative" style={{ marginTop: '0px' }}>
          <div className="bg-gradient-to-b from-green-200 to-green-300 rounded-2xl p-6 w-56 shadow-lg">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Step 1
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Strategy</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We conduct in-depth market research and comprehensive user analysis, creating a strategic roadmap that aligns your software product vision with business objectives to maximize success and market relevance.
            </p>
          </div>
        </div>

        {/* Step 2 - Planning */}
        <div className="relative" style={{ marginTop: '60px' }}>
          <div className="bg-gradient-to-b from-orange-100 to-orange-200 rounded-2xl p-6 w-56 shadow-lg">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Step 2
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Planning</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our planning phase translates strategy into actionable steps, outlining timelines, resource allocation, and milestones, ensuring every detail of the software development process stays organized and efficient.
            </p>
          </div>
        </div>

        {/* Step 3 - Development */}
        <div className="relative" style={{ marginTop: '120px' }}>
          <div className="bg-gradient-to-b from-orange-200 to-orange-300 rounded-2xl p-6 w-56 shadow-lg">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Step 3
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Development</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Using agile methodologies, we bring your vision to innovative digital products with a focus on functionality, scalability, and quality, ensuring it will meet your unique specifications perfectly.
            </p>
          </div>
        </div>

        {/* Step 4 - Testing */}
        <div className="relative" style={{ marginTop: '180px' }}>
          <div className="bg-gradient-to-b from-orange-300 to-orange-200 rounded-2xl p-6 w-56 shadow-lg">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Step 4
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Testing</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our rigorous testing phase identifies and resolves any potential issues, guaranteeing a seamless, user-friendly experience while ensuring that your product meets all quality standards consistently.
            </p>
          </div>
        </div>

        {/* Step 5 - Launch */}
        <div className="relative" style={{ marginTop: '240px' }}>
          <div className="bg-white rounded-2xl p-6 w-56 shadow-lg">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Step 5
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Launch</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We execute a well-coordinated launch plan, including final checks and promotional strategies, positioning your software product for success and maximizing user engagement from day one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
