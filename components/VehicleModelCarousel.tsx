
import React, { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

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

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveDot(index);
    }
  };

  return (
    <div className="bg-white py-16 px-4 md:px-8">
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
      >
        {MODELS.map((model, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 w-[85vw] md:w-[600px] aspect-[4/3] md:aspect-[16/10] bg-gray-50 rounded-lg overflow-hidden relative snap-center group"
          >
            <img 
              src={model.image} 
              alt={model.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1000ms] ease-out"
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

            {/* Next Arrow Peek (Only on desktop) */}
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-md text-white hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {MODELS.map((_, idx) => (
          <div 
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeDot === idx ? 'bg-gray-800 scale-125' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleModelCarousel;
