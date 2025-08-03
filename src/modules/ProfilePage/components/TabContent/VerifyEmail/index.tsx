import { Icons } from '@/assets/icons';
import React from 'react';
import HeadingProfile from '../../HeadingProfile';
import FormVerifyEmail from './FormVerifyEmail';
import VerifyEmailSuccess from './VerifyEmailSuccess';
import { useUser } from '@/modules/ProfilePage/hook/useUser';

const VerifyEmail = () => {
  const { user } = useUser();
  const isVerifyEmail = user?.isVerified;
  return (
    <div>
      <HeadingProfile onSetIsEditProfile={() => {}} title='Verify Email' Icon={Icons.ShieldCheck} isHidden={false} />
      {isVerifyEmail ? <VerifyEmailSuccess /> : <FormVerifyEmail />}
    </div>
  );
};

export default VerifyEmail;
