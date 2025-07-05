'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { TAB_VALUES } from '../../utils/const';
import LoginAuthentication from './LoginAuthentication';
import RegisterAuthentication from './RegisterAuthentication';

const FormAuthentication = () => {
  const [tab, setTab] = React.useState(TAB_VALUES.LOGIN);

  const renderContentTab = () => {
    switch (tab) {
      case TAB_VALUES.LOGIN:
        return <LoginAuthentication />;
      case TAB_VALUES.REGISTER:
        return <RegisterAuthentication setTab={setTab} />;
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
            tab === TAB_VALUES.LOGIN && 'bg-primary text-white'
          )}
          onClick={() => setTab(TAB_VALUES.LOGIN)}
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
