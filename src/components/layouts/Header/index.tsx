'use client';

import React from 'react';
import Logo from './components/Logo';
import SwitchLocale from './components/SwitchLocale';

const Header = () => {
  return (
    <div className='bg-[#fdf4e0] py-2 shadow-[rgba(50,_50,_105,_0.1)_0px_1px_4px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
      <div className='container mx-auto flex items-center justify-between'>
        <Logo />
        <SwitchLocale />
      </div>
    </div>
  );
};

export default Header;
