
import React, { useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-white py-6 px-4 md:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6">
        
        {/* Full Self-Driving Video Card - Dominant Column */}
        <div className="relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[640px] bg-gray-100 group">
          <video
            ref={videoRef}
            preload="none"
            poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-FSD-Tablet-Poster.jpg"
            autoPlay
            playsInline
            loop
            muted
            className="w-full h-full object-cover"
            src="https://digitalcontent.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Homepage-FSD-Tablet.mp4"
          >
            <source src="https://digitalcontent.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Homepage-FSD-Tablet.mp4" type="video/mp4" />
          </video>
          
          {/* Top Right Controls */}
          <button 
            onClick={togglePlay}
            className="absolute top-6 right-6 p-2 bg-black/20 backdrop-blur-md rounded-md text-white hover:bg-black/40 transition-all z-20"
          >
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
          </button>

          {/* Bottom Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black/50 via-transparent to-transparent">
            <h3 className="text-white text-[28px] md:text-[36px] font-semibold mb-6 tracking-tight drop-shadow-md">
              Full Self-Driving (Supervised)
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-2.5 bg-[#3E6AE1] text-white text-[14px] font-medium rounded-md hover:bg-[#3457B1] transition-all whitespace-nowrap">
                Demo Drive
              </button>
              <button className="px-10 py-2.5 bg-white text-black text-[14px] font-medium rounded-md hover:bg-gray-100 transition-all whitespace-nowrap">
                View Report
              </button>
            </div>
          </div>
        </div>

        {/* Features That Come Standard Image Card - Smaller Column */}
        <div className="relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[640px] bg-gray-100 group">
          <img 
            src="https://res.cloudinary.com/dqhawdcol/image/upload/v1767974934/n2ndwyz317fmfetrmn4n.avif" 
            alt="Standard Features" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Bottom Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black/50 via-transparent to-transparent">
            <h3 className="text-white text-[28px] md:text-[36px] font-semibold mb-6 tracking-tight drop-shadow-md">
              Features That Come Standard
            </h3>
            <div>
              <button className="px-12 py-2.5 bg-[#3E6AE1] text-white text-[14px] font-medium rounded-md hover:bg-[#3457B1] transition-all">
                Discover
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
