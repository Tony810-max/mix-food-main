'use client';
import React, { useState } from 'react';
import { tabs } from '../../utils/const';
import ChangePassword from './ChangePassword';
import PersonalInfoForm from './PersonalInfo';
const TabProfile = () => {
  const [tab, setTab] = useState<String>('personalInfo');

  const renderContentTab = () => {
    switch (tab) {
      case 'personalInfo':
        return <PersonalInfoForm />;
      case 'changePassword':
        return <ChangePassword />;
      case 'verifyEmail':
        return <span>verify Email content</span>;
      default:
        return <span>Profile content</span>;
    }
  };
  return (
    <div className='space-y-8'>
      <div className='grid grid-cols-3 rounded-md bg-[#f4f4f4] px-4 py-2 shadow-sm'>
        {tabs.map((item) => (
          <span
            key={item.key}
            className={`py-1 text-center hover:cursor-pointer hover:opacity-70 ${
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
