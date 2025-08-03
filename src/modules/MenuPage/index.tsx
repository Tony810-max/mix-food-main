import React from 'react';
import OurMenu from './components/OurMenu';
import RecommendDish from './components/RecommendDish';

const MenuPage = () => {
  return (
    <div className='container mx-auto'>
      <OurMenu />
      <RecommendDish />
    </div>
  );
};

export default MenuPage;
