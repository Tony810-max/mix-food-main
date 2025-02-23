'use client';
import React from 'react';
import AuthActions from './components/AuthActions';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SwitchLocale from './components/SwitchLocale';

const Header = () => {
  return (
    <div className='fixed top-0 w-full px-4 py-3 shadow-[rgba(50,_50,_105,_0.1)_0px_1px_4px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] backdrop-blur-sm lg:px-10'>
      <div className='mx-auto flex items-center justify-between'>
        <Logo />
        <div className='flex items-center gap-2 lg:hidden'>
          <SwitchLocale />
          <Sidebar />
        </div>
        <div className='hidden items-center gap-8 lg:flex'>
          <Navbar />
          <AuthActions />
          <SwitchLocale />
        </div>
      </div>
    </div>
  );
};

export default Header;
