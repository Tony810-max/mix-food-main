import React from 'react';
import AboutSection from './components/AboutSection';
import ConnectSection from './components/ConnectSection';
import HeroSection from './components/HeroSection';

const story = `Mix Food is a premium Thai restaurant located in the heart of Da Nang, Vietnam. Since our establishment, we've been dedicated to bringing authentic Thai flavors to our beloved city. Our passion for Thai cuisine is reflected in every dish we serve.

We take pride in using traditional Thai recipes and locally sourced ingredients to create an unforgettable dining experience. Our chefs are trained in authentic Thai culinary techniques, ensuring each dish captures the essence of Thailand's rich culinary heritage.`;

const specialties = [
  'Traditional Thai Curries',
  'Authentic Pad Thai',
  'Signature Thai Salads',
  'Traditional Thai Desserts',
];

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <HeroSection title='Mix Food' subtitle='Authentic Thai Cuisine in Da Nang, Vietnam' />
      <AboutSection story={story} specialties={specialties} />
      <ConnectSection />
    </div>
  );
};

export default AboutPage;
