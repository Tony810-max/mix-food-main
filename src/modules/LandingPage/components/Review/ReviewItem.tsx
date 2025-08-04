'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import type { FC } from 'react';
import type { IReview } from '../../utils/types';

const ReviewItem: FC<IReview> = ({ name, date, rating, review }) => {
  return (
    <Card className='p-6'>
      <CardContent className='p-0'>
        <div className='mb-4 flex items-center space-x-1'>
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className='h-4 w-4 fill-[#fed11b] text-[#fed11b]' />
          ))}
        </div>
        <p className='mb-4 text-gray-600'>{review} </p>
        <div className='flex items-center space-x-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#fed11b] to-amber-500 font-medium text-gray-900'>
            {name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className='font-medium'>{name}</p>
            <p className='text-gray-500 text-sm'>{date}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewItem;
