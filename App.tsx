
import React, { useState } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import Footer from './components/Footer';
import StickyControls from './components/StickyControls';
import VehicleModelCarousel from './components/VehicleModelCarousel';
import PromotionsSection from './components/PromotionsSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header Navigation */}
      <Header onMenuOpenChange={setIsMenuOpen} />

      {/* Blur Overlay when mega-menu is active */}
      <div 
        className={`fixed inset-0 bg-black/5 backdrop-blur-sm z-40 transition-opacity duration-300 pointer-events-none ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Main Content Area */}
      <main className={`transition-all duration-300 ${isMenuOpen ? 'blur-sm' : ''}`}>
        {/* Fullscreen Hero Carousel */}
        <HeroCarousel />

        {/* Vehicle Model Showcase Carousel */}
        <VehicleModelCarousel />

        {/* Promotions Section (Current Offers / American Heroes) */}
        <PromotionsSection />
      </main>

      {/* Site Footer */}
      <div className={`${isMenuOpen ? 'blur-sm' : ''} transition-all duration-300`}>
        <Footer />
      </div>

      {/* Sticky Call to Actions */}
      <StickyControls />
    </div>
  );
}

export default App;
