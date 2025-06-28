import { Icons } from '@/assets/icons';
import InputLabel from '@/components/InputLabel';
import { Button } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const passwordSchema = z
  .object({
    currentPassword: z.string().min(6, 'Current password is required and must be at least 6 characters'),
    newPassword: z.string().min(6, 'New password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Please confirm your new password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type PasswordFormData = z.infer<typeof passwordSchema>;

const FormChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: PasswordFormData) => {
    // Handle submit (e.g., call API)
    // For now, just reset
    reset();
    alert('Password changed successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid space-y-4'>
      <InputLabel
        label='Current Password'
        placeHolder='Enter your current password'
        type='password'
        IconStart={Icons.Lock}
        isIconEnd={true}
        errorMessage={errors.currentPassword?.message}
        {...register('currentPassword')}
      />
      <InputLabel
        label='New Password'
        placeHolder='Enter your new password'
        type='password'
        IconStart={Icons.Lock}
        isIconEnd={true}
        errorMessage={errors.newPassword?.message}
        {...register('newPassword')}
      />
      <InputLabel
        label='Confirm New Password'
        placeHolder='Re-enter your new password'
        type='password'
        IconStart={Icons.Lock}
        isIconEnd={true}
        errorMessage={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <Button
        type='submit'
        className='w-full rounded bg-primary py-2 font-semibold text-white transition hover:bg-primary-dark'
        isLoading={isSubmitting}
      >
        Change Password
      </Button>
    </form>
  );
};

export default FormChangePassword;
