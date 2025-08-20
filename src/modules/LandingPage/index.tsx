import dynamic from 'next/dynamic';
import React from 'react';
const BannerLandingPage = dynamic(() => import('./components/BannerLandingPage'));
const BestSeller = dynamic(() => import('./components/BestSeller'));
const LastedUpdate = dynamic(() => import('./components/LastedUpdate'));
const PopularFood = dynamic(() => import('./components/PopularFood'));
const Review = dynamic(() => import('./components/Review'));
const About = dynamic(() => import('./components/About'));

const LandingPage = () => {
  return (
    <div>
      <BannerLandingPage />
      <div className='container mx-auto'>
        <BestSeller />
        <About />
        <Review />
        <PopularFood />
        <LastedUpdate />
      </div>
    </div>
  );
};

export default LandingPage;
