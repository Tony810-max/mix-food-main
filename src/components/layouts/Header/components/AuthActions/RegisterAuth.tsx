import { useSignUpMutation } from '@/api/auth/mutations';
import { Icons } from '@/assets/icons';
import InputLabel from '@/components/InputLabel';
import { Button } from '@heroui/react';
import React from 'react';
import { toast } from 'sonner';
import { TAB_VALUES } from '../../utils/const';
import type { RegisterFormValues } from '../../utils/schema';
import { useRegisterForm } from '../../utils/useRegisterForm';

export interface IRegisterAuthenticationProps {
  onSetTab: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterAuth: React.FC<IRegisterAuthenticationProps> = ({ onSetTab }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRegisterForm();

  const { mutateAsync: signUp, isPending } = useSignUpMutation({
    onSuccess: () => {
      onSetTab(TAB_VALUES.LOGIN);
      toast.success('Register successfully!');
    },
    onError: (error) => {
      toast.error(error?.message || 'Register failed!');
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    await signUp({
      email: data.email,
      phone: data.phone,
      username: data.name,
      password: data.password,
    });
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
      <Button disabled={isPending} color='primary' fullWidth type='submit' isLoading={isPending}>
        Register
      </Button>
    </form>
  );
};

export default RegisterAuth;
