import { cn } from '@/lib/utils';
import React, { type FC, type HTMLAttributes } from 'react';

interface IHeading extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

const Heading: FC<IHeading> = ({ description, title, className, ...props }) => {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      <p className={'text-center font-semibold text-3xl text-primary capitalize'}>{title}</p>
      {description && <p className='text-center text-primary'>{description}</p>}
    </div>
  );
};

export default Heading;
