import React from 'react';
import { dataReview } from '../../utils/const';
import Heading from '../Heading';
import CustomerRespon from './CustomerRespon';

const Review = () => {
  return (
    <div className='px-4 lg:px-0'>
      <Heading title='Customer Testimonials' />
      <div className='space-y-8 py-4'>
        {dataReview?.map((review) => (
          <CustomerRespon
            key={review?.id}
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
