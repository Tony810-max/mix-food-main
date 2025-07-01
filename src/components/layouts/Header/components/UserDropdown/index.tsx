import React from 'react';

import { Icons } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import UserDropdownHeader from './UserDropdownHeader';
import UserDropdownLogout from './UserDropdownLogout';
import UserDropdownMenu from './UserDropdownMenu';

const mockUser = {
  name: 'John Doe',
  membership: 'Gold Member',
  avatar: '',
};

const UserDropdown: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='ghost' className='flex min-w-[180px] items-center gap-3 rounded-lg px-2 py-1 hover:bg-gray-50'>
          <span className='flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-base text-white'>
            {mockUser.name.slice(0, 2).toUpperCase()}
          </span>
          <div className='flex flex-col items-start'>
            <span className='font-semibold text-base text-black leading-tight'>{mockUser.name}</span>
            <span className='font-medium text-gray-500 text-xs'>{mockUser.membership}</span>
          </div>

          {open ? (
            <Icons.ChevronDown className='ml-2 h-5 w-5 rotate-180 transition-transform duration-200' />
          ) : (
            <Icons.ChevronDown className='ml-2 h-5 w-5 transition-transform duration-200' />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align='end'
        className='z-20 mt-2 w-64 overflow-hidden rounded-xl border bg-white p-0 text-left shadow-lg'
      >
        <div className='px-4 pt-3 pb-2'>
          <span className='mb-1 inline-block rounded bg-yellow-100 px-2 py-0.5 font-semibold text-xs text-yellow-800'>
            {mockUser.membership}
          </span>
        </div>
        <UserDropdownHeader name={mockUser.name} membership={mockUser.membership} avatar={mockUser.avatar} />
        <div className='pt-1'>
          <UserDropdownMenu />
        </div>
        <UserDropdownLogout />
      </PopoverContent>
    </Popover>
  );
};

export default UserDropdown;
