'use client';
import { Tab, Tabs } from '@heroui/react';
import React from 'react';
import LoginAuthentication from './LoginAuthentication';
import RegisterAuthentication from './RegisterAuthentication';
const FormAuthentication = () => {
  return (
    <div className='w-full rounded-md border border-primary px-5 py-4 shadow-lg md:w-1/2'>
      <Tabs color='primary' size='md' fullWidth>
        <Tab key='login' title='Login'>
          <LoginAuthentication />
        </Tab>
        <Tab key='register' title='Register'>
          <RegisterAuthentication />
        </Tab>
      </Tabs>
    </div>
  );
};

export default FormAuthentication;
