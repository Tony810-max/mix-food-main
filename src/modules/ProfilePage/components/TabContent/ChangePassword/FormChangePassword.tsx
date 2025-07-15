import { useChangePasswordMutation } from '@/api/changePassword/mutations';
import { Icons } from '@/assets/icons';
import InputLabel from '@/components/InputLabel';
import { Button } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';
import { passwordSchema } from '../Types/schema';

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

  const { mutateAsync: changePassword, isPending } = useChangePasswordMutation({
    onSuccess: () => {
      toast.success('Change password successfully');
      reset();
    },
    onError: (error) => {
      toast.error(error?.message || 'Failed to change password');
    },
  });

  const onSubmit = async (data: PasswordFormData) => {
    await changePassword({
      oldPassword: data.currentPassword,
      newPassword: data.newPassword,
    });
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
        isLoading={isPending}
      >
        Change Password
      </Button>
    </form>
  );
};

export default FormChangePassword;
