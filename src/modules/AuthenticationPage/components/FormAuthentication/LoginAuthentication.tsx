import { useSignInMutation } from '@/api/auth/mutations';
import { Icons } from '@/assets/icons';
import InputLabel from '@/components/InputLabel';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/lib/routes';
import { Button } from '@heroui/react';
import { useGoogleLogin } from '@react-oauth/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';
import type { LoginFormValues } from './schema';
import { useLoginForm } from './useLoginForm';

const LoginAuthentication = () => {
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
      console.log('🚀 ~ LoginAuthentication ~ data:', data);
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
    onError: (err) => {
      toast.error(err?.message || 'Login failed!');
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    await signIn({
      phone: data.phone,
      password: data.password,
    });
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code',
  });

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
      <div className='flex justify-end'>
        <Link href={ROUTES.FORGOT_PASSWORD} className=' w-fit text-red-500 text-sm hover:opacity-70'>
          Can't remember your password?
        </Link>
      </div>
      <Button color='primary' fullWidth type='submit' isLoading={isPending} disabled={isPending}>
        Login
      </Button>
      <Button onPress={() => login()} color='secondary' fullWidth startContent={<Icons.Mail />}>
        Login with Google
      </Button>
    </form>
  );
};

export default LoginAuthentication;
