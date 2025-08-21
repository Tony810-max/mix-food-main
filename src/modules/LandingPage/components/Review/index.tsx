import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useTranslations } from 'next-intl';
import React from 'react';
import { REVIEW_DATA } from '../../utils/const';
import Heading from '../Heading';
import ReviewItem from './ReviewItem';

const Review = () => {
  const t = useTranslations('HomePage');
  return (
    <div className='space-y-4 p-paddingYSection px-4 py-paddingSection lg:px-0'>
      <Heading title={t('customer-review')} description='' />
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {REVIEW_DATA?.map((review, index) => (
            <CarouselItem key={index} className='cursor-grabbing lg:basis-2/4'>
              <ReviewItem {...review} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Review;
