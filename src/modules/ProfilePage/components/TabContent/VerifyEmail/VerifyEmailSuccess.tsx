import { ShieldCheck } from 'lucide-react';
import React from 'react';

const VerifyEmailSuccess = () => {
  return (
    <div className='flex flex-col items-center justify-center rounded-lg border border-green-200 bg-green-50 p-6 shadow-md'>
      <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100'>
        <ShieldCheck className='h-10 w-10 text-green-500' />
      </div>
      <div className='mb-1 font-semibold text-green-700 text-xl'>Xác minh email thành công!</div>
      <div className='text-center text-base text-green-600'>
        Tài khoản của bạn đã được xác minh. Cảm ơn bạn đã xác thực email.
      </div>
    </div>
  );
};

export default VerifyEmailSuccess;
