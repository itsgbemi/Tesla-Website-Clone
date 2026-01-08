
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
    <footer className="w-full bg-white py-12 px-6 flex flex-col items-center">
      <div className="flex flex-wrap justify-center items-center gap-y-4 md:gap-x-6 text-[12px] font-medium text-gray-600">
        <span>Tesla © {currentYear + 2}</span>
        {footerLinks.map((link) => (
          <a key={link} href="#" className="hover:text-black transition-colors">
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
