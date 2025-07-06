import React from 'react';
import Heading from '@/components/Heading';
import FormForgotPassword from './FormForgotPassword';

const ForgotPassword = () => {
  return (
    <div className='mt-[3.875rem] flex min-h-[calc(100vh-62px)] flex-col items-center justify-center rounded-xl bg-white p-8 shadow-lg'>
      <Heading title='Mix Food' description='Experience Thailand Through Every Bite' className='py-8' />
      <FormForgotPassword />
    </div>
  );
};

export default ForgotPassword;
