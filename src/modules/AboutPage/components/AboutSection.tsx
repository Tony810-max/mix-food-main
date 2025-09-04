'use client';
import { URL_RESTAURANT_ABOUT } from '@/modules/utils/const';
import Image from 'next/image';
import React from 'react';

interface AboutSectionProps {
  story: string;
  specialties: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ story, specialties }) => {
  return (
    <div className='container mx-auto py-10'>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='space-y-6'>
          <h1 className='font-bold text-4xl'>Câu chuyện của chúng tôi</h1>
          <p className='text-justify text-gray-500 text-lg'>
            Mix Food được thành lập vào năm 2019 với niềm đam mê mang đến hương vị Thái Lan đích thực cho người Việt
            Nam. Bắt đầu từ một nhà hàng nhỏ, chúng tôi đã phát triển thành một trong nhà hàng Thái uy tín nhất tại
            TP.Đà Nẵng.
          </p>
          <p className='text-justify text-gray-500 text-lg'>
            Bí quyết tạo nên hương vị Thái Lan đích thực nằm ở sự khéo léo của đầu bếp Việt cùng nguồn nguyên liệu tươi
            ngon nhập khẩu từ Thái. Tất cả mang đến cho bạn trải nghiệm ẩm thực trọn vẹn, chuẩn không cần chỉnh.
          </p>
          <p className='text-justify text-gray-500 text-lg'>
            Mix Food không chỉ là nơi thưởng thức ẩm thực, mà còn là không gian để bạn trải nghiệm văn hóa và lòng hiếu
            khách đặc trưng của người Thái.
          </p>
        </div>
        <div className='relative h-96 w-full lg:h-full'>
          <Image
            src={URL_RESTAURANT_ABOUT}
            alt='restaurant'
            fill
            priority
            unoptimized
            className='rounded-md object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
