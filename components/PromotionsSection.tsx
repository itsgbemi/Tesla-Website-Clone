
import React from 'react';

const PromotionsSection: React.FC = () => {
  const promos = [
    {
      title: 'Current Offers',
      description: 'Explore limited-time offers on Tesla vehicles.',
      image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1761883600/wmosahpaveosvayfqtgs.avif',
      link: '#'
    },
    {
      title: 'American Heroes',
      description: '$500 off for military, first responders, healthcare, teachers and students.',
      image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767966174/ppyfcaj3hiaihvrgipuj.avif',
      link: '#'
    }
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-12 mb-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {promos.map((promo, idx) => (
          <div 
            key={idx} 
            className="bg-[#f4f4f4] rounded-xl overflow-hidden flex flex-col md:flex-row min-h-[340px]"
          >
            {/* Text Content */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-between order-2 md:order-1">
              <div className="space-y-3">
                <h3 className="text-[28px] md:text-[32px] font-semibold text-[#171a20] tracking-tight">
                  {promo.title}
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#393c41] leading-relaxed max-w-[280px]">
                  {promo.description}
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <a 
                  href={promo.link}
                  className="inline-block w-full md:w-auto text-center px-12 py-2.5 bg-white text-[#171a20] text-[14px] font-medium rounded-md border border-transparent hover:bg-white/80 transition-all shadow-sm"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 h-[200px] md:h-auto order-1 md:order-2">
              <img 
                src={promo.image} 
                alt={promo.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromotionsSection;
