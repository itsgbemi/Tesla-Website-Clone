
import React from 'react';
import { HeroSlide } from './types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: 'Model 3',
    subtitle: '2.99% APR Available',
    desktopImage: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1761738187/bpcah0gwcgevuzms8d2s.avif',
    mobileImage: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1761728713/fb2qr0nn0onpzlvmzs6o.avif',
    primaryCta: 'Order Now',
    secondaryCta: 'View Inventory',
    priceInfo: 'From $29,990 after Est. Savings'
  },
  {
    id: 2,
    title: 'Model Y',
    subtitle: '1.99% APR Available',
    desktopImage: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767879855/i9tc9erll22ulbtfvumc.avif',
    mobileImage: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767880002/q4lsjh24qpyammj9rg2e.avif',
    primaryCta: 'Order Now',
    secondaryCta: 'View Inventory',
    priceInfo: 'Most Popular SUV'
  }
];

export const TeslaLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 342 35" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    fill="currentColor"
  >
    <path d="M0 .1a9.7 9.7 0 0 1 7 7h11l.5.1v27.6h6.8V7.4l.5-.1h11.6l6.7-7H0Zm38.3 0h7.1v34.9h-7.1V0Zm33.6 0c-3.8 0-6.7 1-8.4 3l-1.6 2.2V0h-7.6v34.9H71v-23l.3-1c.5-1.1 1.5-2 3.2-2s2.7.9 3.2 2l.3 1v23h7.1V10c0-6.7-4.6-10-13-10Zm50.2 10.1v-3l-1-1c-1.1-1-2.1-1.3-4.2-1.3s-3 .3-4.1 1.3l-1 1v17.4l1 1c1.2 1.1 2.2 1.5 4.1 1.5s3.1-.4 4.1-1.5l1-1V10.1Zm7.1 17c0 6.7-4.6 10-13 10s-13-3.3-13-10V7.8c0-6.7 4.6-10 13-10s13 3.3 13 10v19.3Zm15.8-19.1c-1.1-1-2.1-1.3-4.2-1.3s-3 .3-4.1 1.3l-1 1V27l1 1c1.2 1.1 2.2 1.5 4.1 1.5s3.1-.4 4.1-1.5l1-1V8Zm7.1 19.1c0 6.7-4.6 10-13 10s-13-3.3-13-10V7.8c0-6.7 4.6-10 13-10s13 3.3 13 10V27.1ZM245.8 0h6.9l12 19.8L276.7 0h6.9l-15.4 24.9v10h-7.1v-10L245.8 0Zm39 31.3l-1-1c-1.1-1-1.4-2.1-1.4-4.2V8c0-2.1.3-3.1 1.4-4.1l1-1h13.4l6.5-2.8V0h-21v34.9h7.1V31.3h13.3l6.5-2.8V26.4h-13.4l-.8.1h-.2Zm45.2-11.3l.5.1h11.1l6.7-7h-25.3v34.9h7.1V20.1l.4-.1h11.6l6.7-7h-11.6l-.5-.1V7h-7.1v13Z"/>
  </svg>
);
