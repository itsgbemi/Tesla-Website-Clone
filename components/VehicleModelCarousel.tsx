
import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const MODELS = [
  {
    category: 'Midsize SUV',
    name: 'Model Y',
    image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767900107/dcffmrdgii2jpoe2et72.avif',
  },
  {
    category: 'Sport Sedan',
    name: 'Model 3',
    image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767900110/kwbf35w00klvgvmnmbnj.avif',
  },
  {
    category: 'Utility Truck',
    name: 'Cybertruck',
    image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767900103/ajbjhabu1feyeu2ixlem.avif',
  },
  {
    category: 'Luxury SUV',
    name: 'Model X',
    image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767900098/iqnhzkn6eqiqtqgcaxug.avif',
  },
  {
    category: 'Luxury Sedan',
    name: 'Model S',
    image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767900110/kwbf35w00klvgvmnmbnj.avif',
  }
];

const VehicleModelCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrowVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
      
      // Update active dot based on scroll position
      const index = Math.round(scrollLeft / (clientWidth * 0.85)); // 0.85 approx mobile card width
      setActiveDot(Math.min(index, MODELS.length - 1));
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
    <div className="bg-white py-16 px-4 md:px-8 relative group">
      <div 
        ref={scrollRef}
        onScroll={updateArrowVisibility}
        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
      >
        {MODELS.map((model, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 w-[85vw] md:w-[600px] aspect-[4/3] md:aspect-[16/10] bg-gray-50 rounded-lg overflow-hidden relative snap-center group/card"
          >
            <img 
              src={model.image} 
              alt={model.name} 
              className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[1000ms] ease-out"
            />
            
            {/* Labels */}
            <div className="absolute top-6 left-6 text-white font-medium drop-shadow-md">
              <span className="text-[14px] md:text-[16px] opacity-90">{model.category}</span>
            </div>
            <div className="absolute bottom-16 left-6 md:bottom-20 md:left-10 text-white drop-shadow-md">
              <h3 className="text-[32px] md:text-[44px] font-semibold">{model.name}</h3>
            </div>

            {/* Buttons */}
            <div className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-8 flex gap-3">
              <button className="flex-1 md:flex-initial md:px-12 bg-[#3E6AE1] text-white py-2.5 rounded-md font-medium text-[13px] md:text-[14px] hover:bg-[#3457B1] transition-colors">
                Order Now
              </button>
              <button className="flex-1 md:flex-initial md:px-12 bg-white text-black py-2.5 rounded-md font-medium text-[13px] md:text-[14px] hover:bg-white/90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showLeftArrow && (
        <button 
          onClick={() => scroll('left')}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 backdrop-blur-md p-3 rounded-md text-black z-30 transition-all shadow-sm hidden md:block"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      
      {showRightArrow && (
        <button 
          onClick={() => scroll('right')}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 backdrop-blur-md p-3 rounded-md text-black z-30 transition-all shadow-sm hidden md:block"
          aria-label="Scroll Right"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Dots Indicator */}
      <div className="flex justify-center gap-4 mt-4">
        {MODELS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (scrollRef.current) {
                const cardWidth = window.innerWidth < 768 ? window.innerWidth * 0.85 : 600;
                scrollRef.current.scrollTo({ left: idx * (cardWidth + 24), behavior: 'smooth' });
              }
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeDot === idx ? 'bg-gray-800 scale-125' : 'bg-gray-300'
            }`}
            aria-label={`Go to item ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleModelCarousel;
