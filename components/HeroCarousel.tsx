
import React, { useState, useEffect, useCallback } from 'react';
import { HERO_SLIDES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen overflow-hidden group">
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Images */}
          <picture>
            <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
            <img
              src={slide.desktopImage}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
          </picture>

          {/* Combined Content Area */}
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-[18%] md:pt-[12%] z-20 px-6">
            <div className="text-center mb-6"> {/* Reduced margin from mb-8 to mb-6 */}
              <h1 className="text-[40px] md:text-[56px] font-semibold text-white tracking-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-[17px] md:text-[20px] font-medium text-white underline underline-offset-4 decoration-1 decoration-white drop-shadow-md cursor-pointer hover:decoration-2 transition-all">
                {slide.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row items-center justify-center gap-3 md:gap-4 w-full md:w-auto mt-2"> {/* Added small margin for fine-tuning */}
              <button className="flex-1 md:flex-initial md:w-[264px] bg-[#3E6AE1] text-white py-3 md:py-3.5 rounded-md font-medium text-[13px] md:text-[14px] hover:bg-[#3457B1] transition-colors">
                {slide.primaryCta}
              </button>
              <button className="flex-1 md:flex-initial md:w-[264px] bg-white text-black py-3 md:py-3.5 rounded-md font-medium text-[13px] md:text-[14px] hover:bg-white/90 transition-colors">
                {slide.secondaryCta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
