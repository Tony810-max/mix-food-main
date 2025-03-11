import React from 'react';
import { dataReview } from '../../utils/const';
import Heading from '../Heading';
import CustomerRespon from './CustomerRespon';

const Review = () => {
  return (
    <div className='space-y-4 p-paddingYSection px-4 py-paddingSection lg:px-0'>
      <Heading title='Customer Testimonials' />
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
