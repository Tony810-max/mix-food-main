import React from 'react';
import HeroSection from '../../components/HeroSection';
import ContentMenu from './components/ContentMenu';

const MenuPage = () => {
  return (
    <div>
      <HeroSection title='Menu' subtitle='Discover our menu' />
      <ContentMenu />
    </div>
  );
};

export default MenuPage;
