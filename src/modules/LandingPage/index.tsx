import dynamic from 'next/dynamic';
import React from 'react';

const BannerLandingPage = dynamic(() => import('./components/BannerLandingPage'));
const BestSeller = dynamic(() => import('./components/BestSeller'));
const LastedUpdate = dynamic(() => import('./components/LastedUpdate'));
const Popular = dynamic(() => import('./components/Popular'));
const PopularFood = dynamic(() => import('./components/PopularFood'));
const Review = dynamic(() => import('./components/Review'));

const LandingPage = () => {
  return (
    <div className='mt-[3.75rem]'>
      <BannerLandingPage />
      <div className='container mx-auto'>
        <BestSeller />
        <Popular />
        <Review />
        <PopularFood />
        <LastedUpdate />
      </div>
    </div>
  );
};

export default LandingPage;
