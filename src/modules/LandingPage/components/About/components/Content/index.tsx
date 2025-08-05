import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';
import Link from 'next/link';
import React from 'react';
import DotText from './DotText';

const Content = () => {
  return (
    <div className='space-y-6'>
      <span className='font-bold text-3xl leading-tight sm:text-5xl'>
        Hành trình mang hương vị Thái Lan đến Việt Nam
      </span>
      <p className='max-w-[31.25rem] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
        Được thành lập bởi đầu bếp Somchai từ Bangkok, Thai Delicious cam kết mang đến những món ăn Thái Lan chính gốc
        với nguyên liệu tươi ngon và công thức truyền thống.
      </p>
      <div className='grid gap-4 sm:grid-cols-2'>
        <DotText text='15+ năm kinh nghiệm' />
        <DotText text='Đầu bếp người Thái' />
        <DotText text='Nguyên liệu nhập khẩu' />
        <DotText text='Công thức truyền thống' />
      </div>
      <Button className='hover:opacity-70'>
        <Link href={ROUTES?.ABOUT}>Tìm hiểu thêm</Link>
      </Button>
    </div>
  );
};

export default Content;
