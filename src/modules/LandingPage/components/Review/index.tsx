import { useTranslations } from 'next-intl';
import React from 'react';
import { dataReview } from '../../utils/const';
import Heading from '../Heading';
import CustomerRespon from './CustomerRespon';

const Review = () => {
  const t = useTranslations('HomePage');
  return (
    <div className='space-y-4 p-paddingYSection px-4 py-paddingSection lg:px-0'>
      <Heading title={t('customer-review')} />
      <div className='space-y-8'>
        {dataReview?.map((review, index) => (
          <CustomerRespon
            key={review?.id}
            index={index}
            name={review?.name}
            date={review?.date}
            rating={review?.rating}
            review={review?.review}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
