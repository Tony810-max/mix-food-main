import React from 'react';
import CardAbout from './CardAbout';
import HeadingAbout from './HeadingAbout';
import { DATA_ACHIEVEMENT } from './utils/const';

const AchievementSection = () => {
  return (
    <div className='container py-10 '>
      <HeadingAbout />
      <div className='grid grid-cols-4 gap-6 py-10'>
        {DATA_ACHIEVEMENT?.map((data) => (
          <CardAbout key={data.title} {...data} />
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
