import React from 'react';

import ContentMenu from './ContentMenu';
import ImageFood from './ImageFood';

const OurMenu = () => {
  return (
    <div className='flex flex-col justify-between gap-4 py-4 sm:py-12 md:flex-row'>
      <ContentMenu />
      <ImageFood />
    </div>
  );
};

export default OurMenu;
