import React from 'react';

interface IHeading {
  title: string;
}

const Heading: React.FC<IHeading> = ({ title }) => {
  return <span className='inline-block py-3 font-bold text-2xl'>{title}</span>;
};

export default Heading;
