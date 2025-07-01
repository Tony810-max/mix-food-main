'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import LoginAuthentication from './LoginAuthentication';
import RegisterAuthentication from './RegisterAuthentication';

const FormAuthentication = () => {
  const [tab, setTab] = React.useState('login');
  console.log('🚀 ~ FormAuthentication ~ tab:', tab);

  const renderContentTab = () => {
    switch (tab) {
      case 'login':
        return <LoginAuthentication />;
      case 'register':
        return <RegisterAuthentication />;
      default:
        return null;
    }
  };

  return (
    <div className='w-full space-y-2 rounded-md border border-primary px-5 py-4 shadow-lg md:w-1/2'>
      <div className='grid grid-cols-2 border '>
        <span
          className={cn(
            'cursor-pointer rounded-lg py-1 text-center hover:opacity-50',
            tab === 'login' && 'bg-primary text-white'
          )}
          onClick={() => setTab('login')}
        >
          Login
        </span>
        <span
          className={cn(
            'cursor-pointer rounded-lg py-1 text-center hover:opacity-50',
            tab === 'register' && 'bg-primary text-white'
          )}
          onClick={() => setTab('register')}
        >
          Register
        </span>
      </div>
      {renderContentTab()}
    </div>
  );
};

export default FormAuthentication;
