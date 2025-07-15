import InputLabel from '@/components/InputLabel';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Icons } from '@/assets/icons';
import { schemaProfile } from '@/modules/ProfilePage/utils/schema';
import { useUserStore } from '@/stores/userStore';
import type { z } from 'zod';

type FormData = z.infer<typeof schemaProfile>;

interface IFormPersonal {
  isEditProfile: boolean;
}

const FormPersonal: React.FC<IFormPersonal> = ({ isEditProfile }) => {
  const user = useUserStore((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schemaProfile),
    mode: 'onChange',
    defaultValues: {
      fullName: user?.username || 'John Doe',
      email: user?.email || 'john.doe@example.com',
      phone: user?.phone || '+1 (555) 123-4567',
      birthday: 'dd/mm/yyyy',
      address: 'Your address',
      bio: 'Food enthusiast who loves trying new cuisines and sharing great dining experiences.',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form className='grid space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <InputLabel
          disable={!isEditProfile}
          label='Full Name'
          placeHolder='John Doe'
          type='text'
          IconStart={Icons.User}
          errorMessage={errors.fullName?.message}
          {...register('fullName')}
        />
        <InputLabel
          disable={!isEditProfile}
          label='Email'
          placeHolder='john.doe@example.com'
          type='email'
          IconStart={Icons.MailIcon}
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <InputLabel
          disable={!isEditProfile}
          label='Phone Number'
          placeHolder='+1 (555) 123-4567'
          type='text'
          IconStart={Icons.Phone}
          errorMessage={errors.phone?.message}
          {...register('phone')}
        />
        <InputLabel
          disable={!isEditProfile}
          label='Birthday'
          placeHolder='15/05/1990'
          type='text'
          IconStart={Icons.Calendar ? Icons.Calendar : Icons.User}
          errorMessage={errors.birthday?.message}
          {...register('birthday')}
        />
      </div>
      <InputLabel
        disable={!isEditProfile}
        label='Address'
        placeHolder='123 Main St, New York, NY 10001'
        type='text'
        IconStart={Icons.Globe ? Icons.Globe : Icons.User}
        errorMessage={errors.address?.message}
        {...register('address')}
      />
      <InputLabel
        disable={!isEditProfile}
        label='Bio'
        placeHolder='Bio'
        type='text'
        IconStart={Icons.User}
        errorMessage={errors.bio?.message}
        {...register('bio')}
      />
      {isEditProfile && (
        <button
          type='submit'
          className='mt-4 rounded bg-primary px-6 py-2 font-semibold text-white transition hover:bg-primary-dark'
        >
          Save
        </button>
      )}
    </form>
  );
};

export default FormPersonal;
