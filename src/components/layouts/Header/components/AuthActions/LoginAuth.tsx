'use client';

import { useSignInMutation } from '@/api/auth/mutations';
import { Icons } from '@/assets/icons';
import InputLabel from '@/components/InputLabel';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/lib/routes';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';
import type { LoginFormValues } from '../../utils/schema';
import { useLoginForm } from '../../utils/useLoginForm';
import type { IActiveAuth } from './TabAuth';

const LoginAuth: React.FC<IActiveAuth> = ({ onSetActive }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();
  const { setUserData } = useAuth();

  const { mutateAsync: signIn, isPending } = useSignInMutation({
    onSuccess: (res) => {
      const data = res?.data;
      const user = data?.user;
      const tokens = data?.tokens;

      toast.success('Login successfully!');
      setUserData({
        accessToken: tokens?.accessToken,
        refreshToken: tokens?.refreshToken,
        user,
      });
      router.push(ROUTES.LANDING_PAGE);
    },
    onError: (err: any) => {
      console.log('🚀 ~ LoginAuthentication ~ err:', err);
      toast.error(err?.message || 'Login failed!');
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    await signIn({
      phone: data.phone,
      password: data.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <div>
        <InputLabel
          type='text'
          IconStart={Icons?.User}
          label='Phone'
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
      <p
        onClick={() => onSetActive(true)}
        className='w-ful text-right text-red-500 text-sm hover:cursor-pointer hover:opacity-70'
      >
        Can't remember your password?
      </p>
      <Button color='primary' fullWidth type='submit' isLoading={isPending} disabled={isPending}>
        Login
      </Button>
    </form>
  );
};

export default LoginAuth;
