import Heading from '@/components/Heading';
import React from 'react';
import LocationInfo from './LocationInfo';

const ContentLocations = () => {
  return (
    <div className='container mx-auto py-6'>
      <Heading title='Find Us' />
      <LocationInfo />
    </div>
  );
};

export default ContentLocations;
