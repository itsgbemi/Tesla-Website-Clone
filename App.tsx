
import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import Footer from './components/Footer';
import StickyControls from './components/StickyControls';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main>
        {/* Fullscreen Hero Carousel */}
        <HeroCarousel />

        {/* Placeholder for other sections to demonstrate scrolling behavior */}
        <section className="py-24 px-6 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-8">Engineering for Safety</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group">
                    <img 
                        src="https://picsum.photos/800/450?random=1" 
                        alt="Safety feature" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-end p-8">
                        <div className="text-white text-left">
                            <h3 className="text-xl font-bold">5-Star Safety</h3>
                            <p className="text-sm opacity-90">Engineered with high-strength architecture.</p>
                        </div>
                    </div>
                </div>
                 <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group">
                    <img 
                        src="https://picsum.photos/800/450?random=2" 
                        alt="Safety feature" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-end p-8">
                        <div className="text-white text-left">
                            <h3 className="text-xl font-bold">Autopilot</h3>
                            <p className="text-sm opacity-90">Advanced safety and convenience features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Experience Tesla Section */}
        <section className="bg-black text-white py-24 text-center">
            <h2 className="text-4xl font-semibold mb-4">Experience Tesla</h2>
            <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto px-4">
                Schedule a Demo Drive today and experience why Tesla is the #1 chosen electric vehicle globally.
            </p>
            <button className="border-2 border-white px-12 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-all">
                Demo Drive
            </button>
        </section>
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Sticky Call to Actions */}
      <StickyControls />
    </div>
  );
}

export default App;
