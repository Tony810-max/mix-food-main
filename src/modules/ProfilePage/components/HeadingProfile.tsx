import { Icons } from '@/assets/icons';
import { Button } from '@heroui/react';
import type { LucideIcon } from 'lucide-react';
import React, { type Dispatch, type SetStateAction } from 'react';

interface IHeadingProfile {
  title: string;
  Icon: LucideIcon;
  isHidden: boolean;
  isEditProfile?: boolean;
  onSetIsEditProfile: Dispatch<SetStateAction<boolean>>;
}

const HeadingProfile: React.FC<IHeadingProfile> = ({ onSetIsEditProfile, isEditProfile, ...props }) => {
  const handleEditProfile = () => {
    onSetIsEditProfile(true);
  };

  const handleCancel = () => {
    onSetIsEditProfile(false);
  };

  return (
    <div className='mb-4 flex items-center justify-between gap-2 '>
      <div className='flex items-center gap-2'>
        <props.Icon size={24} color='var(--primary-color)' className='flex-shrink-0' />
        <span className='font-bold text-lg sm:text-2xl'>{props.title}</span>
      </div>
      {props.isHidden && (
        <>
          {!isEditProfile ? (
            <Button
              color='primary'
              variant='bordered'
              startContent={<Icons.PenLine size={18} className='flex-shrink-0' />}
              onPress={handleEditProfile}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              color='danger'
              variant='bordered'
              startContent={<Icons.X size={18} className='flex-shrink-0' />}
              onPress={handleCancel}
            >
              Cancel
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default HeadingProfile;
