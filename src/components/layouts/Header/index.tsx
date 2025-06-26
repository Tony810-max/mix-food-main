'use client';
import React from 'react';
import AuthActions from './components/AuthActions';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SwitchLocale from './components/SwitchLocale';

const Header = () => {
  return (
    <div className='fixed top-0 z-50 w-full border bg-white py-3 shadow-sm backdrop-blur-md lg:py-[0.125rem]'>
      <div className='container mx-auto flex items-center justify-between px-4'>
        <Logo className='hidden lg:flex' />
        <Sidebar />
        <div className='flex items-center gap-2 lg:gap-4'>
          <div className='hidden items-center gap-8 lg:flex'>
            <Navbar />
            <AuthActions />
          </div>

          <SwitchLocale />
        </div>
      </div>
    </div>
  );
};

export default Header;
