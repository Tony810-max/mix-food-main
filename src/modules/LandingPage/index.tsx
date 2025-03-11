import React from 'react';
import Banner from './components/Banner';
import Feature from './components/Feature';
import LastedUpdate from './components/LastedUpdate';
import Popular from './components/Popular';
import PopularFood from './components/PopularFood';
import Review from './components/Review';

const LandingPage = () => {
  return (
    <div className='mt-[4.5rem]'>
      <Banner />
      <div className='container mx-auto'>
        <Feature />
        <Popular />
        <Review />
        <PopularFood />
        <LastedUpdate />
      </div>
    </div>
  );
};

export default LandingPage;
