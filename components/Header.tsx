
import React, { useState, useEffect } from 'react';
import { HelpCircle, Globe, User, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Vehicles', 'Energy', 'Charging', 'Discover', 'Shop'];
  const logoUrl = 'https://res.cloudinary.com/dqhawdcol/image/upload/v1761718553/xvtekklcntsfqyt2qtzp.png';

  const vehicleModels = [
    { name: 'Model S', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767882927/elt0wpv3hpf27srica28.avif', links: ['Learn', 'Order'] },
    { name: 'Model 3', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767882929/cr9zedwesqgh6grdct6v.avif', links: ['Learn', 'Order'] },
    { name: 'Model Y', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883031/wlzqtleh16jnrzh5rpyz.avif', links: ['Learn', 'Order'] },
    { name: 'Model X', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767882924/nusmx2stlth2uvzikczv.avif', links: ['Learn', 'Order'] },
    { name: 'Cybertruck', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767882922/iywrj80duahyxcnadsbq.avif', links: ['Learn', 'Order'] },
    { name: 'Inventory', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767882919/exbx5kifg7nndeqlo6fo.avif', links: ['New', 'Pre-Owned'] },
  ];

  const vehicleSideLinks = [
    'Full Self-Driving (Supervised)', 'Current Offers', 'Demo Drive', 'Trade-in',
    'Vehicle Safety Report', 'Pre-Owned', 'Trip Planner', 'Features',
    'Help Me Choose', 'Compare', 'Safety', 'Fleet', 'Semi', 'Roadster', 'Robotaxi'
  ];

  const energyProducts = [
    { name: 'Solar Panels', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883393/qowdzfbadgal6vz62cuw.avif', links: ['Learn', 'Order'] },
    { name: 'Solar Roof', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883396/xwii9b1fu5y1ioswkzsv.avif', links: ['Learn', 'Order'] },
    { name: 'Powerwall', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883501/jbnc2fxucymuaivhae24.avif', links: ['Learn', 'Order'] },
    { name: 'Megapack', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883504/yx9ckmhlgzacr5xx70xl.avif', links: ['Learn'] },
  ];

  const energySideLinks = [
    'Schedule a Consultation', 'Why Solar', 'Incentives', 'Support',
    'Partner with Tesla', 'Commercial', 'Utilities'
  ];

  const chargingProducts = [
    { name: 'Charging', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883796/jg84dkls9i9bz17pvep5.avif', links: ['Learn'] },
    { name: 'Home Charging', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883800/lfomn5nx32cpgfdlsetq.avif', links: ['Learn', 'Shop'] },
    { name: 'Supercharging', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883803/yy9cjo0lbyu0s6czvnly.avif', links: ['Learn', 'Find'] },
    { name: 'Wall Connector for Business', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883823/esm3oqvefealnn2prxvi.avif', links: ['Learn', 'Order'] },
    { name: 'Supercharger for Business', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883857/v87ghkhrqfvrl0sfxanb.avif', links: ['Learn', 'Order'] },
  ];

  const chargingSideLinks = [
    'Help Me Charge', 'Charging Calculator', 'Charging With NACS', 'Supercharger Voting', 'Host a Supercharger'
  ];

  const discoverLinks = {
    Resources: [
      'Demo Drive', 'Insurance', 'Current Offers', 'Learn', 
      'Video Guides', 'Customer Stories', 'Events', 'Safety'
    ],
    'Location Services': [
      'Find Us', 'Find a Collision Center', 'Find a Certified Installer'
    ],
    Company: [
      'About', 'Careers', 'Investor Relations'
    ]
  };

  const mobileLinks = [
    { name: 'Vehicles', hasSub: true },
    { name: 'Energy', hasSub: true },
    { name: 'Charging', hasSub: true },
    { name: 'Discover', hasSub: true },
    { name: 'Shop', hasSub: false },
    { name: 'Support', hasSub: false },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-5 
          ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent md:bg-white'} 
          text-black`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="flex-1">
          <a href="/" aria-label="Tesla Home">
            <img 
              src={logoUrl} 
              alt="Tesla" 
              className={`h-6 w-auto transition-all ${isScrolled ? 'invert-0' : 'invert md:invert-0'}`}
            />
          </a>
        </div>

        <nav className="hidden lg:flex flex-[2] justify-center space-x-1 text-[14px] font-medium">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href="#" 
              onMouseEnter={() => setActiveDropdown(link)}
              className={`px-4 py-2 rounded-md transition-colors ${activeDropdown === link ? 'bg-black/5' : 'hover:bg-black/5'}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex-1 flex justify-end items-center space-x-2 md:space-x-4">
          <button className="hidden md:block p-2 hover:bg-black/5 rounded-md transition-colors" aria-label="Support">
            <HelpCircle size={20} />
          </button>
          <button className="hidden md:block p-2 hover:bg-black/5 rounded-md transition-colors" aria-label="Language">
            <Globe size={20} />
          </button>
          <button className="hidden md:block p-2 hover:bg-black/5 rounded-md transition-colors" aria-label="Account">
            <User size={20} />
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden flex items-center px-4 py-1.5 rounded-md font-medium text-sm transition-colors ${isScrolled ? 'bg-black/5' : 'bg-white/20 backdrop-blur-sm text-white md:text-black md:bg-black/5'}`} 
            aria-label="Menu"
          >
            Menu
          </button>
        </div>

        {/* Mega Menus Wrapper */}
        <div className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 origin-top ${activeDropdown ? 'scale-y-100 opacity-100 py-16' : 'scale-y-0 opacity-0 py-0 pointer-events-none'}`}>
          
          {/* Vehicles Mega Menu */}
          {activeDropdown === 'Vehicles' && (
            <div className="max-w-[1400px] mx-auto grid grid-cols-[3fr_1fr] px-12">
              <div className="grid grid-cols-4 gap-x-4 gap-y-12">
                {vehicleModels.map((car) => (
                  <div key={car.name} className="flex flex-col items-center group">
                    <img src={car.image} alt={car.name} className="w-full max-w-[240px] h-auto object-contain mb-4 transform group-hover:scale-105 transition-transform duration-500" />
                    <h4 className="text-[17px] font-bold mb-2">{car.name}</h4>
                    <div className="flex space-x-4 text-[13px] font-medium text-gray-500">
                      {car.links.map((link, idx) => (
                        <a key={idx} href="#" className="underline underline-offset-4 decoration-gray-300 hover:text-black hover:decoration-black transition-all">{link}</a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-l border-gray-200 ml-12 pl-12 flex flex-col space-y-4">
                {vehicleSideLinks.map((link) => (
                  <a key={link} href="#" className="text-[14px] font-semibold text-black hover:opacity-70 transition-opacity">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Energy Mega Menu */}
          {activeDropdown === 'Energy' && (
            <div className="max-w-[1400px] mx-auto grid grid-cols-[3fr_1fr] px-12">
              <div className="grid grid-cols-4 gap-x-4 gap-y-12">
                {energyProducts.map((prod) => (
                  <div key={prod.name} className="flex flex-col items-center group">
                    <img src={prod.image} alt={prod.name} className="w-full max-w-[240px] h-auto object-contain mb-4 transform group-hover:scale-105 transition-transform duration-500" />
                    <h4 className="text-[17px] font-bold mb-2">{prod.name}</h4>
                    <div className="flex space-x-4 text-[13px] font-medium text-gray-500">
                      {prod.links.map((link, idx) => (
                        <a key={idx} href="#" className="underline underline-offset-4 decoration-gray-300 hover:text-black hover:decoration-black transition-all">{link}</a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-l border-gray-200 ml-12 pl-12 flex flex-col space-y-4">
                {energySideLinks.map((link) => (
                  <a key={link} href="#" className="text-[14px] font-semibold text-black hover:opacity-70 transition-opacity">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Charging Mega Menu */}
          {activeDropdown === 'Charging' && (
            <div className="max-w-[1400px] mx-auto grid grid-cols-[3fr_1fr] px-12">
              <div className="grid grid-cols-3 gap-x-4 gap-y-12">
                {chargingProducts.map((prod) => (
                  <div key={prod.name} className="flex flex-col items-center group">
                    <img src={prod.image} alt={prod.name} className="w-full max-w-[240px] h-auto object-contain mb-4 transform group-hover:scale-105 transition-transform duration-500" />
                    <h4 className="text-[17px] font-bold mb-2 text-center">{prod.name}</h4>
                    <div className="flex space-x-4 text-[13px] font-medium text-gray-500">
                      {prod.links.map((link, idx) => (
                        <a key={idx} href="#" className="underline underline-offset-4 decoration-gray-300 hover:text-black hover:decoration-black transition-all">{link}</a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-l border-gray-200 ml-12 pl-12 flex flex-col space-y-4">
                {chargingSideLinks.map((link) => (
                  <a key={link} href="#" className="text-[14px] font-semibold text-black hover:opacity-70 transition-opacity">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Discover Mega Menu */}
          {activeDropdown === 'Discover' && (
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12 px-12">
              {Object.entries(discoverLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-gray-500 text-[14px] font-medium mb-6 uppercase tracking-wider">{category}</h3>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-black text-[16px] font-semibold hover:opacity-70 transition-opacity">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Menu">
            <X size={28} className="text-gray-800" />
          </button>
        </div>
        
        <div className="px-8 pb-12 overflow-y-auto h-full flex flex-col">
          <nav className="flex-1">
            <ul className="space-y-6">
              {mobileLinks.map((link) => (
                <li key={link.name} className="flex items-center justify-between group cursor-pointer py-2">
                  <span className="text-[20px] font-semibold text-gray-800">{link.name}</span>
                  {link.hasSub && <ChevronRight size={20} className="text-gray-400" />}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-12 space-y-8 pb-12">
            <div className="flex items-center space-x-4 cursor-pointer">
              <Globe size={24} className="text-gray-800" />
              <div className="flex flex-col">
                <span className="text-[16px] font-semibold">United States</span>
                <span className="text-[14px] text-gray-500">English</span>
              </div>
              <div className="ml-auto">
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-4 cursor-pointer">
              <div className="w-6 h-6 rounded-full border-2 border-gray-800 flex items-center justify-center">
                <User size={14} className="text-gray-800" />
              </div>
              <span className="text-[16px] font-semibold">Account</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
