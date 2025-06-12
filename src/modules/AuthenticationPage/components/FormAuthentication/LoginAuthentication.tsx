import { Icons } from '@/assets/icons';
import InputLabel from '@/components/InputLabel';
import { Button } from '@heroui/react';
import React from 'react';

const LoginAuthentication = () => {
  return (
    <div className='space-y-12'>
      <InputLabel type='mail' IconStart={Icons?.MailIcon} label='Email' placeHolder='your@email.com' />
      <InputLabel
        type='password'
        IconStart={Icons?.Lock}
        isIconEnd={true}
        label='Password'
        placeHolder='Enter your password'
      />
      <Button color='primary' fullWidth>
        Login
      </Button>
    </div>
  );
};

export default LoginAuthentication;
