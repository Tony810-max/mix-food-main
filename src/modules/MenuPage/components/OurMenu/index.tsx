import React from 'react';

import ContentMenu from './ContentMenu';
import ImageFood from './ImageFood';

const OurMenu = () => {
  return (
    <div className='flex justify-between gap-4 py-16'>
      <ContentMenu />
      <ImageFood />
    </div>
  );
};

export default OurMenu;
