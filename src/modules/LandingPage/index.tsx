import React from 'react';
import Banner from './components/Banner';
import Feature from './components/Feature';
import Popular from './components/Popular';
import Review from './components/Review';

const LandingPage = () => {
  return (
    <div className='mt-[4.5rem]'>
      <Banner />
      <div className='container mx-auto'>
        <Feature />
        <Popular />
        <Review />
      </div>
    </div>
  );
};

export default LandingPage;
