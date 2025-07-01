import { Icons } from '@/assets/icons';
import React from 'react';

const UserDropdownLogout: React.FC = () => {
  // Use LogOut icon if available, else fallback to X
  const LogoutIcon = Icons.User || Icons.X;
  return (
    <div className='border-t px-4 pt-2 pb-2'>
      <button
        className='flex w-full items-center gap-3 rounded px-2 py-2 font-medium text-red-500 text-sm transition hover:bg-red-50'
        type='button'
        // onClick={logoutHandler} // To be implemented
      >
        <LogoutIcon className='h-5 w-5' />
        Logout
      </button>
    </div>
  );
};

export default UserDropdownLogout;
