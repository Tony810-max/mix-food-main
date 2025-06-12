import { Icons } from '@/assets/icons';
import InputLabel from '@/components/InputLabel';
import { Button } from '@heroui/react';
import React from 'react';

const RegisterAuthentication = () => {
  return (
    <div className='space-y-12'>
      <InputLabel type='text' IconStart={Icons?.MailIcon} label='Name' placeHolder='Enter your name' />
      <InputLabel type='mail' IconStart={Icons?.MailIcon} label='Email' placeHolder='your@email.com' />
      <InputLabel type='text' IconStart={Icons?.MailIcon} label='Phone Number' placeHolder='Enter your phone number' />
      <InputLabel
        type='password'
        IconStart={Icons?.Lock}
        isIconEnd={true}
        label='Password'
        placeHolder='Enter your password'
      />
      <InputLabel
        type='password'
        IconStart={Icons?.Lock}
        isIconEnd={true}
        label='Confirm Password'
        placeHolder='Enter your password'
      />
      <Button color='primary' fullWidth>
        Register
      </Button>
    </div>
  );
};

export default RegisterAuthentication;
