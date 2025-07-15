'use client';

import React, { useMemo, useState } from 'react';
import { TAB_VALUES, type TTabValues, tabs } from '../../utils/const';
import ChangePassword from './ChangePassword';
import PersonalInfoForm from './PersonalInfo';
import VerifyEmail from './VerifyEmail';

const TabProfile = () => {
  const [tab, setTab] = useState<TTabValues>(TAB_VALUES.PERSONAL_INFO);

  const renderContentTab = useMemo(() => {
    switch (tab) {
      case TAB_VALUES.PERSONAL_INFO:
        return <PersonalInfoForm />;
      case TAB_VALUES.CHANGE_PASSWORD:
        return <ChangePassword />;
      case TAB_VALUES.VERIFY_EMAIL:
        return <VerifyEmail />;
      default:
        return <span>Profile content</span>;
    }
  }, [tab]);

  return (
    <div className='w-full space-y-8'>
      <div
        className='flex flex-nowrap justify-between overflow-x-auto rounded-md bg-[#f4f4f4] px-2 py-2 shadow-sm sm:grid sm:grid-cols-3 sm:gap-2 sm:px-4'
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {tabs?.map((item) => (
          <span
            key={item?.key}
            className={`whitespace-nowrap px-2 py-2 text-center text-sm transition-all duration-150 hover:cursor-pointer hover:opacity-70 sm:text-base ${
              tab === item?.key ? 'rounded-md bg-white font-bold shadow' : ''
            }`}
            onClick={() => setTab(item?.key)}
          >
            {item?.label}
          </span>
        ))}
      </div>
      <div>{renderContentTab}</div>
    </div>
  );
};

export default TabProfile;
