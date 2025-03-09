import React from 'react';
import Heading from '../Heading';
import FormNewsLetter from './FormNewsLetter';

const Newsletter = () => {
  return (
    <div>
      <Heading title='Newsletter' />
      <span>Subscribe to get the latest updates and promotions.</span>
      <FormNewsLetter />
    </div>
  );
};

export default Newsletter;
