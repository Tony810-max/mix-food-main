import Heading from '@/components/Heading';
import React from 'react';
import FormAuthentication from './components/FormAuthentication';

const AuthenticationPage = () => {
  return (
    <div className='container flex min-h-screen flex-col items-center justify-center'>
      <Heading title='Mix Food' description='Experience Thailand Through Every Bite' className='py-8' />
      <FormAuthentication />
    </div>
  );
};

export default AuthenticationPage;
