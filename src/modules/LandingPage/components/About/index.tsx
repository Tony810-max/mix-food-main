import React from 'react';
import Content from './components/Content';
import ImageAbout from './components/ImageAbout';

const About = () => {
  return (
    <div className='py-paddingSection'>
      <div className='flex flex-col items-center justify-between gap-4 bg-[#fffceb] px-4 py-20 lg:flex-row'>
        <Content />
        <ImageAbout />
      </div>
    </div>
  );
};

export default About;
