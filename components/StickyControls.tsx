
import React from 'react';

const StickyControls: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-2px_15px_rgba(0,0,0,0.08)] py-4 flex justify-center items-center z-40">
      <div className="flex space-x-3 w-full max-w-7xl px-4 md:px-8 justify-center">
        <button className="bg-[#f6f6f6] border border-[#c1c1c1] p-3 md:px-6 md:py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-100 transition-all transform active:scale-95 flex-initial justify-center md:justify-start">
          <svg className="w-5 h-5 text-[#5C5E62] shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M19.5 4h-15A2.5 2.5 0 0 0 2 6.5v9A2.5 2.5 0 0 0 4.5 18H6v2.07a.928.928 0 0 0 1.507.725l3.22-2.576A1 1 0 0 1 11.35 18h8.15a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 19.5 4M8 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2"></path>
          </svg>
          <div className="hidden md:flex flex-col items-start leading-tight">
            <span className="text-[12px] text-gray-500 font-medium">Ask a Question</span>
            <span className="text-[14px] text-gray-800 font-semibold italic">"Compare Model 3 and Model Y"</span>
          </div>
        </button>

        <button className="bg-[#f6f6f6] border border-[#c1c1c1] p-3 md:px-8 md:py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-100 transition-all transform active:scale-95 group flex-1 md:flex-initial justify-center md:justify-start">
          <img 
            src="https://res.cloudinary.com/dqhawdcol/image/upload/v1767882311/nvselitacs7eyi2xrzrz.svg" 
            alt="Steering Wheel" 
            className="w-6 h-6 shrink-0"
          />
          <span className="text-[14px] md:text-[15px] text-gray-800 font-semibold">Schedule a Drive Today</span>
        </button>
      </div>
    </div>
  );
};

export default StickyControls;
