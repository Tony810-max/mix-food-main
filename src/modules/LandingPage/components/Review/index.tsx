import { useTranslations } from 'next-intl';
import React from 'react';
import { REVIEW_DATA } from '../../utils/const';
import Heading from '../Heading';
import ReviewItem from './ReviewItem';

const Review = () => {
  const t = useTranslations('HomePage');
  return (
    <div className='space-y-4 p-paddingYSection px-4 py-paddingSection lg:px-0'>
      <Heading title={t('customer-review')} />
      <div className='space-y-8'>
        {REVIEW_DATA?.map((review, index) => (
          <ReviewItem key={`${review?.name}-${index}`} index={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Review;
