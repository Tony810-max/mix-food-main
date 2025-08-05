import React from 'react';

interface IDotText {
  text: string;
}

const DotText: React.FC<IDotText> = ({ text }) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='h-2 w-2 rounded-full bg-[#fed11b]'></div>
      <span className='font-medium text-sm'>{text}</span>
    </div>
  );
};

export default DotText;
