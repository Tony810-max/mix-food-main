import { Icons } from '@/assets/icons';
import InputLabel from '@/components/InputLabel';
import { Button } from '@heroui/react';
import React from 'react';
import type { LoginFormValues } from './schema';
import { useLoginForm } from './useLoginForm';

const LoginAuthentication = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginForm();

  const onSubmit = (data: LoginFormValues) => {
    // TODO: Replace with actual login logic
    // e.g., await loginUser(data)
    alert('Login successful!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <div>
        <InputLabel
          type='mail'
          IconStart={Icons?.User}
          label='Email'
          placeHolder='your@email.com'
          {...register('email')}
          errorMessage={errors.email?.message as string}
        />
      </div>
      <div>
        <InputLabel
          type='password'
          IconStart={Icons?.Lock}
          isIconEnd={true}
          label='Password'
          placeHolder='Enter your password'
          {...register('password')}
          errorMessage={errors.password?.message as string}
        />
      </div>
      <Button color='primary' fullWidth type='submit' isLoading={isSubmitting} disabled={isSubmitting}>
        Login
      </Button>
    </form>
  );
};

export default LoginAuthentication;
