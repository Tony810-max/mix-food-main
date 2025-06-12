import { Icons } from '@/assets/icons';
import { Input } from '@heroui/react';
import type { LucideIcon } from 'lucide-react';
import React, { useState } from 'react';

interface IInputLabel {
  isRequire?: boolean;
  label: string;
  placeHolder: string;
  IconStart: LucideIcon;
  isIconEnd?: boolean;
  type: string;
}

const InputLabel: React.FC<IInputLabel> = ({ IconStart, isIconEnd, isRequire = true, ...props }) => {
  const [isHidden, setIsHidden] = useState(false);
  const checkHidden = isHidden ? 'text' : 'password';

  return (
    <Input
      type={props?.type === 'password' ? checkHidden : props?.type}
      isRequired={isRequire}
      label={props?.label}
      labelPlacement='outside'
      placeholder={props?.placeHolder}
      startContent={
        <IconStart
          size={20}
          color='var(--primary-color)'
          className='pointer-events-none flex-shrink-0 text-2xl text-default-400'
        />
      }
      endContent={
        isIconEnd &&
        (isHidden ? (
          <Icons.EyeOff
            size={20}
            color='var(--primary-color)'
            className='flex-shrink-0 text-2xl text-default-400 hover:cursor-pointer hover:opacity-70'
            onClick={() => setIsHidden(!isHidden)}
          />
        ) : (
          <Icons.Eye
            size={20}
            color='var(--primary-color)'
            className='flex-shrink-0 text-2xl text-default-400 hover:cursor-pointer hover:opacity-70'
            onClick={() => setIsHidden(!isHidden)}
          />
        ))
      }
      classNames={{ label: 'font-bold' }}
      errorMessage='Please enter a valid email'
    />
  );
};

export default InputLabel;
