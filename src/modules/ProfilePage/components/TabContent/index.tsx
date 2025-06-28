'use client';
import React, { useState } from 'react';
import { tabs } from '../../utils/const';
import ChangePassword from './ChangePassword';
import PersonalInfoForm from './PersonalInfo';
import VerifyEmail from './VerifyEmail';

const TabProfile = () => {
  const [tab, setTab] = useState<String>('personalInfo');

  const renderContentTab = () => {
    switch (tab) {
      case 'personalInfo':
        return <PersonalInfoForm />;
      case 'changePassword':
        return <ChangePassword />;
      case 'verifyEmail':
        return <VerifyEmail />;
      default:
        return <span>Profile content</span>;
    }
  };
  return (
    <div className='space-y-8'>
      <div
        className='flex flex-nowrap justify-between overflow-x-auto rounded-md bg-[#f4f4f4] px-2 py-2 shadow-sm sm:grid sm:grid-cols-3 sm:gap-2 sm:px-4'
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {tabs.map((item) => (
          <span
            key={item.key}
            className={`whitespace-nowrap px-2 py-2 text-center text-sm transition-all duration-150 hover:cursor-pointer hover:opacity-70 sm:text-base ${
              tab === item.key ? 'rounded-md bg-white font-bold shadow' : ''
            }`}
            onClick={() => setTab(item.key)}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div>{renderContentTab()}</div>
    </div>
  );
};

export default TabProfile;
