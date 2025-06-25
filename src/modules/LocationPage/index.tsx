import React from 'react';
import HeroSection from '../../components/HeroSection';
import ContentLocations from './components/ContentLocations';

const LocationsPage = () => {
  return (
    <div className='mt-[4.5rem] min-h-[calc(100vh-72px)]'>
      <HeroSection title='Location' subtitle='Find us' />
      <ContentLocations />
    </div>
  );
};

export default LocationsPage;
