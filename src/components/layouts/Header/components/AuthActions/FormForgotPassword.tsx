'use client';
import { useForgotPasswordMutation } from '@/api/forgotPassword/mutations';
import { Icons } from '@/assets/icons';
import InputLabel from '@/components/InputLabel';
import { Button } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import type { IActiveAuth } from './TabAuth';
const forgotPasswordSchema = z.object({
  email: z.string({ required_error: 'Please enter your email' }).email('Please enter a valid email address'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const FormForgotPassword: React.FC<IActiveAuth> = ({ onSetActive }) => {
  const router = useRouter();

  const { mutateAsync: forgotPassword, isPending } = useForgotPasswordMutation({
    onSuccess: () => {
      toast.success('Your new password has been sent to your email, please check it');
      onSetActive(false);
    },
    onError: (error) => {
      toast.error(error?.message || 'Forgot password failed!');
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    await forgotPassword({
      email: data.email,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 sm:min-w-96'>
      <InputLabel
        label='Email'
        placeHolder='Enter your email'
        type='email'
        IconStart={Icons.MailIcon}
        errorMessage={errors.email?.message}
        {...register('email')}
      />
      <p
        onClick={() => onSetActive(false)}
        className='w-full text-right text-red-500 text-sm hover:cursor-pointer hover:opacity-70'
      >
        Back to login
      </p>
      <Button
        type='submit'
        className='w-full rounded bg-primary py-2 font-semibold text-white transition hover:bg-primary-dark'
        isLoading={isPending}
      >
        Send Reset Password
      </Button>
    </form>
  );
};

export default FormForgotPassword;
