import React from 'react';
import Banner from './components/Banner';
import Feature from './components/Feature';
import Popular from './components/Popular';

const LandingPage = () => {
  return (
    <div className='mt-20 flex justify-center lg:mt-[6.5rem] xl:mt-20'>
      <div className='container'>
        <Banner />
        <Feature />
        <Popular />
      </div>
    </div>
  );
};

export default LandingPage;
