import { IconList } from '@/assets/icons';
import React from 'react';

const ContactCard = () => {
  return (
    <div className='rounded-md border bg-white px-4 py-5 shadow-md'>
      <div className='flex items-center gap-2 py-4'>
        <IconList.Phone size={24} color='var(--primary-color)' />
        <h2 className='font-bold'>Contact</h2>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='flex items-center gap-2'>
          <IconList.Smartphone size={16} color='var(--primary-color)' /> (+84)905 473 728
        </p>
        <p className='flex items-center gap-2'>
          <IconList.Mail size={16} color='var(--primary-color)' /> mixfood1708@gmail.com
        </p>
        <p>Gọi trực tiếp để được tư vấn và đặt bàn nhanh chóng</p>
      </div>
    </div>
  );
};

export default ContactCard;
