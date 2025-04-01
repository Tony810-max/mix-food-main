import { cn } from '@/lib/utils';
import React, { type FC, type HTMLAttributes } from 'react';

interface IHeading extends HTMLAttributes<HTMLParagraphElement> {
  title: string;
  description?: string;
}

const Heading: FC<IHeading> = ({ description, title, className, ...props }) => {
  return (
    <div className='space-y-2'>
      <p className={cn('text-center font-semibold text-3xl text-primary capitalize', className)} {...props}>
        {title}
      </p>
      {description && <p className='text-center'>{description}</p>}
    </div>
  );
};

export default Heading;
