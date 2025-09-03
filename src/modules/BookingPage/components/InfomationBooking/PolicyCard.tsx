import { IconList } from '@/assets/icons';
import React from 'react';

const PolicyCard = () => {
  return (
    <div className='rounded-md border bg-white px-4 py-5 shadow-md'>
      <div className='flex items-center gap-2 py-4'>
        <IconList.ReceiptText size={24} color='var(--primary-color)' />
        <h2 className='font-bold'>Policy</h2>
      </div>
      <ul className='flex flex-col gap-2'>
        <ol>• Đặt bàn trước ít nhất 2 giờ</ol>
        <ol>• Giữ bàn tối đa 15 phút sau giờ đặt</ol>
        <ol>• Nhóm từ 8 người trở lên vui lòng gọi trực tiếp</ol>
        <ol>• Hủy đặt bàn trước ít nhất 1 giờ</ol>
      </ul>
    </div>
  );
};

export default PolicyCard;
