
import React, { useState, useEffect } from 'react';
import { HelpCircle, Globe, X, ChevronRight } from 'lucide-react';

const ProfileIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M6.858 18.752c.605-1.868 2.722-3.24 5.142-3.24s4.537 1.372 5.142 3.24C15.712 19.844 13.933 20.5 12 20.5s-3.712-.656-5.142-1.748m11.469-1.095c-1.02-2.165-3.483-3.645-6.327-3.645s-5.307 1.48-6.327 3.645A8.46 8.46 0 0 1 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5a8.46 8.46 0 0 1-2.173 5.657M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 5.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2"></path>
  </svg>
);

interface HeaderProps {
  onMenuOpenChange: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuOpenChange }) => {
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

  const handleDropdown = (link: string | null) => {
    setActiveDropdown(link);
    onMenuOpenChange(link !== null);
  };

  const navLinks = ['Vehicles', 'Energy', 'Charging', 'Discover', 'Shop'];
  const logoUrl = 'https://res.cloudinary.com/dqhawdcol/image/upload/v1761718553/xvtekklcntsfqyt2qtzp.png';

  const vehicleModels = [
    { name: 'Model S', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767882927/elt0wpv3hpf27srica28.avif', links: ['Learn', 'Order'] },
    { name: 'Model 3', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767882929/cr9zedwesqgh6grdct6v.avif', links: ['Learn', 'Order'] },
    { name: 'Model Y', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883031/wlzqtleh16jnrzh5rpyz.avif', links: ['Learn', 'Order'] },
    { name: 'Model X', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767882924/nusmx2stlth2uvzikczv.avif', links: ['Learn', 'Order'] },
    { name: 'Cybertruck', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767882922/iywrj80duahyxcnadsbq.avif', links: ['Learn', 'Order'] },
    { name: 'Inventory', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767882919/exbx5kifg7nndeqlo6fo.avif', links: [{ text: 'New', path: '#' }, { text: 'Pre-Owned', path: '#' }] },
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

  const discoverLinks = {
    Resources: ['Demo Drive', 'Insurance', 'Current Offers', 'Learn', 'Video Guides', 'Customer Stories', 'Events', 'Safety'],
    'Location Services': ['Find Us', 'Find a Collision Center', 'Find a Certified Installer'],
    Company: ['About', 'Careers', 'Investor Relations']
  };

  const shopProducts = [
    { name: 'Charging', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767896460/mjhf5qqhp7msb7nqbtij.avif' },
    { name: 'Vehicle Accessories', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767896463/ddsevbvpjkeoa3th3bha.avif' },
    { name: 'Apparel', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767896465/rayy33djc3mxsaqgdpte.avif' },
    { name: 'Lifestyle', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767896503/ttmoh686tubzvdp7zbik.avif' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-5 
          ${isScrolled || activeDropdown ? 'bg-white text-black' : 'bg-transparent text-white md:text-black md:bg-white'}`}
        onMouseLeave={() => handleDropdown(null)}
      >
        <div className="flex-1">
          <a href="/" aria-label="Tesla Home">
            <img 
              src={logoUrl} 
              alt="Tesla" 
              className={`h-6 w-auto transition-all ${isScrolled || activeDropdown ? 'invert-0' : 'invert md:invert-0'}`}
            />
          </a>
        </div>

        <nav className="hidden lg:flex flex-[2] justify-center space-x-1 text-[14px] font-medium">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href="#" 
              onMouseEnter={() => handleDropdown(link)}
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
            <ProfileIcon className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden flex items-center px-4 py-1.5 rounded-md font-medium text-sm transition-colors ${isScrolled || activeDropdown ? 'bg-black/5 text-black' : 'bg-white/20 backdrop-blur-sm text-white'}`} 
            aria-label="Menu"
          >
            Menu
          </button>
        </div>

        {/* Mega Menu Overlay */}
        <div className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 origin-top overflow-hidden
          ${activeDropdown ? 'scale-y-100 opacity-100 max-h-[85vh] py-12' : 'scale-y-0 opacity-0 max-h-0 py-0 pointer-events-none'}`}>
          
          <div className="max-w-[1400px] mx-auto px-12 h-full overflow-y-auto no-scrollbar">
            {activeDropdown === 'Vehicles' && (
              <div className="grid grid-cols-[3fr_1fr] gap-x-12">
                <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                  {vehicleModels.map((car) => (
                    <div key={car.name} className="flex flex-col items-center group mb-2">
                      <img src={car.image} alt={car.name} className="w-full h-auto max-h-[120px] object-contain mb-3" />
                      <h4 className="text-[16px] font-bold mb-1">{car.name}</h4>
                      <div className="flex space-x-3 text-[12px] font-medium text-gray-500">
                        {car.links.map((link, idx) => (
                          <a key={idx} href="#" className="underline underline-offset-4 decoration-gray-300 hover:text-black transition-all">
                            {typeof link === 'string' ? link : link.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-l border-gray-200 pl-12 flex flex-col space-y-3">
                  {vehicleSideLinks.map((link) => (
                    <a key={link} href="#" className="text-[14px] font-semibold text-black hover:opacity-70 transition-opacity">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {activeDropdown === 'Energy' && (
              <div className="grid grid-cols-[3fr_1fr] gap-x-12">
                <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                  {energyProducts.map((prod) => (
                    <div key={prod.name} className="flex flex-col items-center group">
                      <img src={prod.image} alt={prod.name} className="w-full h-auto max-h-[140px] object-contain mb-4" />
                      <h4 className="text-[16px] font-bold mb-1">{prod.name}</h4>
                      <div className="flex space-x-3 text-[12px] font-medium text-gray-500">
                        {prod.links.map((link, idx) => (
                          <a key={idx} href="#" className="underline underline-offset-4 decoration-gray-300 hover:text-black transition-all">{link}</a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-l border-gray-200 pl-12 flex flex-col space-y-4">
                  {['Schedule a Consultation', 'Why Solar', 'Incentives', 'Support', 'Commercial'].map((link) => (
                    <a key={link} href="#" className="text-[14px] font-semibold text-black hover:opacity-70 transition-opacity">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {activeDropdown === 'Discover' && (
              <div className="grid grid-cols-3 gap-x-4 max-w-5xl">
                {Object.entries(discoverLinks).map(([category, links]) => (
                  <div key={category}>
                    <h3 className="text-gray-500 text-[12px] font-medium mb-4 uppercase tracking-wider">{category}</h3>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link}>
                          <a href="#" className="text-black text-[14px] font-semibold hover:opacity-70 transition-opacity">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeDropdown === 'Shop' && (
              <div className="flex justify-center gap-x-16 py-8">
                {shopProducts.map((prod) => (
                  <div key={prod.name} className="flex flex-col items-center group cursor-pointer">
                    <img src={prod.image} alt={prod.name} className="w-48 h-auto object-contain mb-6 transition-transform group-hover:scale-105" />
                    <h4 className="text-[18px] font-bold text-black">{prod.name}</h4>
                  </div>
                ))}
              </div>
            )}

            {activeDropdown === 'Charging' && (
               <div className="grid grid-cols-[3fr_1fr] gap-x-12">
               <div className="grid grid-cols-3 gap-x-8 gap-y-12">
                 {[
                   { name: 'Charging', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883796/jg84dkls9i9bz17pvep5.avif', links: ['Learn'] },
                   { name: 'Home Charging', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883800/lfomn5nx32cpgfdlsetq.avif', links: ['Learn', 'Shop'] },
                   { name: 'Supercharging', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883803/yy9cjo0lbyu0s6czvnly.avif', links: ['Learn', 'Find'] },
                   { name: 'Wall Connector for Business', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883823/esm3oqvefealnn2prxvi.avif', links: ['Learn', 'Order'] },
                   { name: 'Supercharger for Business', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767883857/v87ghkhrqfvrl0sfxanb.avif', links: ['Learn', 'Order'] },
                 ].map((prod) => (
                   <div key={prod.name} className="flex flex-col items-center">
                     <img src={prod.image} alt={prod.name} className="w-full h-auto max-h-[140px] object-contain mb-4" />
                     <h4 className="text-[16px] font-bold mb-1">{prod.name}</h4>
                     <div className="flex space-x-3 text-[12px] font-medium text-gray-500">
                       {prod.links.map((link, idx) => (
                         <a key={idx} href="#" className="underline underline-offset-4 decoration-gray-300 hover:text-black transition-all">{link}</a>
                       ))}
                     </div>
                   </div>
                 ))}
               </div>
               <div className="border-l border-gray-200 pl-12 flex flex-col space-y-4">
                 {['Help Me Charge', 'Charging Calculator', 'Charging With NACS', 'Supercharger Voting'].map((link) => (
                   <a key={link} href="#" className="text-[14px] font-semibold text-black hover:opacity-70 transition-opacity">
                     {link}
                   </a>
                 ))}
               </div>
             </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={28} className="text-gray-800" />
          </button>
        </div>
        
        <div className="px-8 pb-12 overflow-y-auto h-full flex flex-col">
          <nav className="flex-1">
            <ul className="space-y-6">
              {['Vehicles', 'Energy', 'Charging', 'Discover', 'Shop', 'Support'].map((name) => (
                <li key={name} className="flex items-center justify-between group cursor-pointer py-2 border-b border-gray-100 last:border-0">
                  <span className="text-[20px] font-semibold text-gray-800">{name}</span>
                  <ChevronRight size={20} className="text-gray-400" />
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-12 space-y-6 pb-20">
            <div className="flex items-center space-x-4 cursor-pointer">
              <Globe size={24} className="text-gray-800" />
              <div className="flex flex-col">
                <span className="text-[16px] font-semibold">United States</span>
                <span className="text-[14px] text-gray-500">English</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer">
              <ProfileIcon className="w-6 h-6 text-gray-800" />
              <span className="text-[16px] font-semibold">Account</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
