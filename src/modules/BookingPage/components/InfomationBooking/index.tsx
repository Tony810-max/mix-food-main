import React from 'react';
import ContactCard from './ContactCard';
import OpeningCard from './OpeningCard';
import PolicyCard from './PolicyCard';

const InfomationBooking = () => {
  return (
    <div className='flex flex-col justify-between gap-4'>
      <OpeningCard />
      <PolicyCard />
      <ContactCard />
    </div>
  );
};

export default InfomationBooking;
