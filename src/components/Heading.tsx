import { cn } from '@/lib/utils';
import React, { type FC, type HTMLAttributes } from 'react';

interface IHeading extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  subtitle?: string;
  colorClass?: string;
}

const Heading: FC<IHeading> = ({ description, title, subtitle, colorClass, className, ...props }) => {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      <p className={cn('text-center font-extrabold text-4xl capitalize md:text-5xl', colorClass || 'text-primary')}>
        {title}
      </p>
      {subtitle && <p className='text-center text-lg text-secondary'>{subtitle}</p>}
      {description && <p className='text-center text-primary'>{description}</p>}
    </div>
  );
};

export default Heading;
