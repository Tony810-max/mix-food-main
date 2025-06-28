import { Icons } from '@/assets/icons';
import React from 'react';
import HeadingProfile from '../../HeadingProfile';
import FormChangePassword from './FormChangePassword';

const ChangePassword = () => {
  return (
    <div>
      <HeadingProfile onSetIsEditProfile={() => {}} Icon={Icons.Lock} title='Change Password' isHidden={false} />
      <FormChangePassword />
    </div>
  );
};

export default ChangePassword;
