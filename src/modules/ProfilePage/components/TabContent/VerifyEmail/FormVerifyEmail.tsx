import { useVerifyEmailMutation, useVerifyEmailResendMutation } from '@/api/verifyEmail/mutations';
import { Icons } from '@/assets/icons';
import InputLabel from '@/components/InputLabel';
import { useUser } from '@/modules/ProfilePage/hook/useUser';
import { Button } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const schema = z.object({
  code: z.string().min(4, 'Code is required'),
});

type FormData = z.infer<typeof schema>;

const FormVerifyEmail = () => {
  const [timer, setTimer] = useState(0);
  const { refetch } = useUser();
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

  const { mutateAsync: verifyEmailVerify, isPending: isPendingVerify } = useVerifyEmailMutation({
    onSuccess: () => {
      toast.success('Verify email successfully');
      refetch();
    },
    onError: (error) => {
      toast.error(error?.message || 'Failed to verify email');
    },
  });

  const { mutateAsync: verifyEmailResend, isPending } = useVerifyEmailResendMutation({
    onSuccess: () => {
      setTimer(15);
      toast.success('Code sent successfully');
    },
    onError: () => {
      toast.error('Failed to send code');
    },
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

  const onGetCode = async () => {
    await verifyEmailResend();
  };

  const onSubmit = async (data: FormData) => {
    await verifyEmailVerify({
      code: data.code,
    });
  };

  return (
    <form className='flex w-full flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex w-full items-end justify-between gap-3'>
        <div className='w-full flex-1 items-center'>
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
            isLoading={isPending}
            disabled={isPending || timer > 0}
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
