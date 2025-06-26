import React from 'react';
import HeroSection from '../../components/HeroSection';
import ContentLocations from './components/ContentLocations';

const LocationsPage = () => {
  return (
    <div className='min-h-[calc(100vh-60px)]'>
      <HeroSection title='Location' subtitle='Find us' />
      <ContentLocations />
    </div>
  );
};

export default LocationsPage;
