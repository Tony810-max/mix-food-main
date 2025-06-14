import React from 'react';
import BannerLocations from './components/BannerLocations';
import ContentLocations from './components/ContentLocations';

const LocationsPage = () => {
  return (
    <div className='mt-[4.5rem] min-h-[calc(100vh-72px)]'>
      <BannerLocations />
      <ContentLocations />
    </div>
  );
};

export default LocationsPage;
