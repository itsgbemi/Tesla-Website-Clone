
import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import Footer from './components/Footer';
import StickyControls from './components/StickyControls';
import VehicleModelCarousel from './components/VehicleModelCarousel';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main>
        {/* Fullscreen Hero Carousel */}
        <HeroCarousel />

        {/* Vehicle Model Showcase Carousel */}
        <VehicleModelCarousel />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Sticky Call to Actions */}
      <StickyControls />
    </div>
  );
}

export default App;
