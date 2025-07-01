import React from 'react';

interface UserDropdownHeaderProps {
  name: string;
  membership: string;
  avatar?: string;
}

const UserDropdownHeader: React.FC<UserDropdownHeaderProps> = ({ name, membership, avatar }) => {
  return (
    <div className='flex items-center gap-3 border-b px-4 py-3'>
      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-bold text-lg text-white'>
        {avatar ? (
          <img src={avatar} alt={name} className='h-full w-full rounded-full object-cover' />
        ) : (
          name.slice(0, 2).toUpperCase()
        )}
      </div>
      <div>
        <div className='font-medium text-base leading-tight'>{name}</div>
        <div className='font-medium text-gray-500 text-xs'>{membership}</div>
      </div>
    </div>
  );
};

export default UserDropdownHeader;
