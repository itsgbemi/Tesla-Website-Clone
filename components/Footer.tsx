
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    'Privacy & Legal',
    'Vehicle Recalls',
    'Contact',
    'News',
    'Get Updates',
    'Locations',
    'Learn'
  ];

  return (
    <footer className="w-full bg-white pt-12 pb-32 px-6 flex flex-col items-center">
      {/* Desktop Footer */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-x-6 text-[12px] font-medium text-gray-600">
        <span className="cursor-default">Tesla © {currentYear}</span>
        {footerLinks.map((link) => (
          <a key={link} href="#" className="hover:text-black transition-colors">
            {link}
          </a>
        ))}
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden flex flex-col items-center gap-y-4 text-[13px] font-semibold text-gray-700">
        <span className="cursor-default">Tesla © {currentYear}</span>
        <a href="#" className="hover:text-black">Privacy & Legal</a>
        <a href="#" className="hover:text-black">Vehicle Recalls</a>
        <a href="#" className="hover:text-black">News</a>
        <a href="#" className="hover:text-black">Learn</a>
      </div>
    </footer>
  );
};

export default Footer;
