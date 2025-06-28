import { Icons } from '@/assets/icons';
import React from 'react';
import HeadingProfile from '../../HeadingProfile';
import FormVerifyEmail from './FormVerifyEmail';

const VerifyEmail = () => {
  return (
    <div>
      <HeadingProfile onSetIsEditProfile={() => {}} title='Verify Email' Icon={Icons.ShieldCheck} isHidden={false} />
      <FormVerifyEmail />
    </div>
  );
};

export default VerifyEmail;
