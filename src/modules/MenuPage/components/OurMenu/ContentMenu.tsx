import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { URL_MENU } from '../../utils/const';

const ContentMenu = () => {
  return (
    <div className='flex flex-1 flex-col gap-4 '>
      <span className='font-bold text-4xl text-primary'>Our Menu</span>
      <p>
        We carefully select the finest ingredients and honor the deep-rooted traditions of Thai cuisine—faithfully
        following every authentic step to bring out bold, vibrant flavors in each dish. Every plate we serve is a
        heartfelt tribute to the rich culinary heritage of Thailand
      </p>
      <Button className='w-fit rounded-2xl bg-primary py-4 shadow-md hover:opacity-70'>
        <Link href={URL_MENU} target='_blank'>
          View Menu
        </Link>
      </Button>
    </div>
  );
};

export default ContentMenu;
