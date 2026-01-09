
import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const ENERGY_PRODUCTS = [
  {
    name: 'Solar Panels',
    description: 'Power Your Home and Reduce Your Electricity Bill',
    image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767976139/ubldt4qssyn2kzvdsgts.avif',
  },
  {
    name: 'Powerwall',
    description: 'Keep Your Lights On During Outages',
    image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767976137/bncfrqwsnjtmaxsw2oze.avif',
  },
  {
    name: 'Solar Roof',
    description: 'Generate Clean Energy with a Beautiful Roof',
    image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767976135/uerkgqthilm9nacrql4s.avif',
  },
  {
    name: 'Megapack',
    description: 'Store Renewable Energy for Your Business',
    image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767976133/x2x2nw2yitdgrslkndiz.avif',
  }
];

const EnergyCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrowVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
      
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveDot(Math.min(index, ENERGY_PRODUCTS.length - 1));
    }
  };

  useEffect(() => {
    updateArrowVisibility();
    window.addEventListener('resize', updateArrowVisibility);
    return () => window.removeEventListener('resize', updateArrowVisibility);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white py-12 px-4 md:px-12 relative">
      <div 
        ref={scrollRef}
        onScroll={updateArrowVisibility}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
      >
        {ENERGY_PRODUCTS.map((prod, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 w-[85vw] md:w-[760px] aspect-[4/3] md:aspect-[16/9] bg-gray-50 rounded-xl overflow-hidden relative snap-center group"
          >
            <img 
              src={prod.image} 
              alt={prod.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black/50 via-transparent to-transparent">
              <div className="text-white mb-8">
                <h3 className="text-[32px] md:text-[44px] font-semibold mb-2">{prod.name}</h3>
                <p className="text-[14px] md:text-[16px] font-medium opacity-90">{prod.description}</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-12 py-2.5 bg-[#3E6AE1] text-white rounded-md font-medium text-[14px] hover:bg-[#3457B1] transition-colors">
                  Order Now
                </button>
                <button className="px-12 py-2.5 bg-white text-black rounded-md font-medium text-[14px] hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showLeftArrow && (
        <button 
          onClick={() => scroll('left')}
          className="absolute left-6 md:left-14 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 backdrop-blur-md p-3 rounded-md text-black z-30 transition-all shadow-md hidden md:block"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      
      {showRightArrow && (
        <button 
          onClick={() => scroll('right')}
          className="absolute right-6 md:right-14 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 backdrop-blur-md p-3 rounded-md text-black z-30 transition-all shadow-md hidden md:block"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Dots Indicator */}
      <div className="flex justify-center gap-4 mt-6">
        {ENERGY_PRODUCTS.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeDot === idx ? 'bg-gray-800 scale-125' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EnergyCarousel;
