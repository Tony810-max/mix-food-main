import { Separator } from '@/components/ui/separator';
import React from 'react';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Newsletter from './components/Newsletter';
import Privacy from './components/Privacy';
import QuickLink from './components/QuickLink';

const Footer = () => {
  return (
    <div className='border-t px-6 pt-12 lg:px-0'>
      <div className='container mx-auto'>
        <div className='grid gap-6 pb-6 sm:grid-cols-2 lg:grid-cols-4'>
          <About />
          <QuickLink />
          <ContactUs />
          <Newsletter />
        </div>
        <Separator />
        <Privacy />
      </div>
    </div>
  );
};

export default Footer;
