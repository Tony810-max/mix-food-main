import { Icons } from '@/assets/icons';
import InputLabel from '@/components/InputLabel';
import { Button } from '@heroui/react';
import React from 'react';
import type { RegisterFormValues } from './schema';
import { useRegisterForm } from './useRegisterForm';

const RegisterAuthentication = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useRegisterForm();

  const onSubmit = (data: RegisterFormValues) => {
    // TODO: Replace with actual registration logic
    // e.g., await registerUser(data)
    alert('Registration successful!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <div>
        <InputLabel
          type='text'
          IconStart={Icons?.User}
          label='Name'
          placeHolder='Enter your name'
          {...register('name')}
          errorMessage={errors.name?.message as string}
        />
      </div>
      <div>
        <InputLabel
          type='mail'
          IconStart={Icons?.MailIcon}
          label='Email'
          placeHolder='your@email.com'
          {...register('email')}
          errorMessage={errors.email?.message as string}
        />
      </div>
      <div>
        <InputLabel
          type='text'
          IconStart={Icons?.Phone}
          label='Phone Number'
          placeHolder='Enter your phone number'
          {...register('phone')}
          errorMessage={errors.phone?.message as string}
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
      <div>
        <InputLabel
          type='password'
          IconStart={Icons?.Lock}
          isIconEnd={true}
          label='Confirm Password'
          placeHolder='Enter your password'
          {...register('confirmPassword')}
          errorMessage={errors.confirmPassword?.message as string}
        />
      </div>
      <Button color='primary' fullWidth type='submit' isLoading={isSubmitting} disabled={isSubmitting}>
        Register
      </Button>
    </form>
  );
};

export default RegisterAuthentication;
