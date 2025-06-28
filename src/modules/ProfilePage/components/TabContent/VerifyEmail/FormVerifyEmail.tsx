import { Icons } from '@/assets/icons';
import InputLabel from '@/components/InputLabel';
import { Button } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email'),
  code: z.string().min(4, 'Code is required'),
});

type FormData = z.infer<typeof schema>;

const FormVerifyEmail = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  React.useEffect(() => {
    if (timer > 0) {
      timerRef.current = setTimeout(() => setTimer(timer - 1), 1000);
    } else if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timer]);

  const onGetCode = () => {
    // Simulate API call to send code
    setTimer(30);
    clearErrors('code');
  };

  const onSubmit = (data: FormData) => {
    // Simulate code verification
    console.log(data);
  };

  return (
    <form className='flex w-full flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
      <div className='w-full'>
        <InputLabel
          label='Email'
          placeHolder='Enter your email'
          type='email'
          IconStart={Icons.MailIcon}
          errorMessage={errors.email?.message}
          disable={timer > 0}
          {...register('email')}
        />
      </div>
      <div className='flex w-full items-end justify-between gap-3'>
        <div className=' w-full flex-1 items-center'>
          <InputLabel
            label='Verification Code'
            placeHolder='Enter code'
            type='text'
            IconStart={Icons.Lock}
            errorMessage={errors.code?.message}
            {...register('code')}
          />
        </div>
        <div className='flex items-center'>
          <Button
            type='button'
            color='primary'
            variant='solid'
            disabled={timer > 0}
            onPress={onGetCode}
            className={`min-w-36 rounded-xl font-semibold text-base transition-all duration-200 ${timer > 0 ? 'pointer-events-none cursor-not-allowed bg-gray-300 text-white' : 'bg-[#8d674a] text-white hover:bg-[#a97f5d]'}`}
          >
            {timer > 0 ? `Resend (${timer}s)` : 'Get Code'}
          </Button>
        </div>
      </div>
      <Button
        type='submit'
        color='primary'
        variant='solid'
        className='mt-2 w-full rounded-xl bg-[#8d674a] font-semibold text-base text-white hover:bg-[#a97f5d]'
      >
        Verify
      </Button>
    </form>
  );
};

export default FormVerifyEmail;
