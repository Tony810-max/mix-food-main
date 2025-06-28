'use client';
import { Icons } from '@/assets/icons';
import HeadingProfile from '@/modules/ProfilePage/components/HeadingProfile';
import { useState } from 'react';
import FormPersonal from './FormPersonal';

const PersonalInfoForm = () => {
  const [isEditProfile, setIsEditProfile] = useState<boolean>(false);

  return (
    <div className='rounded-lg bg-white p-8 shadow-md'>
      <HeadingProfile
        onSetIsEditProfile={setIsEditProfile}
        title='Personal Information'
        Icon={Icons.User}
        isHidden={true}
        isEditProfile={isEditProfile}
      />
      <div className='mb-2 text-gray-500 text-sm'>Manage your personal details and contact information</div>
      <FormPersonal isEditProfile={isEditProfile} />
    </div>
  );
};

export default PersonalInfoForm;
