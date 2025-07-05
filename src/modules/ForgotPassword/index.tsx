'use client';
import { Icons } from '@/assets/icons';
import Heading from '@/components/Heading';
import InputLabel from '@/components/InputLabel';
import { Button } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const forgotPasswordSchema = z.object({
  email: z.string({ required_error: 'Please enter your email' }).email('Please enter a valid email address'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
  };

  return (
    <div className='mt-8 flex min-h-[calc(100vh-62px)] flex-col items-center justify-center rounded-xl bg-white p-8 shadow-lg'>
      <Heading title='Mix Food' description='Experience Thailand Through Every Bite' className='py-8' />
      {submitted ? (
        <div className='text-center font-semibold text-green-600'>
          If your email is registered, you will receive a password reset link shortly.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-2 rounded-md border border-primary px-5 py-4 shadow-lg sm:min-w-96 '
        >
          <InputLabel
            label='Email'
            placeHolder='Enter your email'
            type='email'
            IconStart={Icons.MailIcon}
            errorMessage={errors.email?.message}
            {...register('email')}
          />
          {errorMsg && <p className='text-center text-red-500 text-sm'>{errorMsg}</p>}
          <Button
            type='submit'
            className='w-full rounded bg-primary py-2 font-semibold text-white transition hover:bg-primary-dark'
            isLoading={isSubmitting}
          >
            Send Reset Password
          </Button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
