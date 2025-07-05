import { Icons } from '@/assets/icons';
import { ROUTES } from '@/lib/routes';
import Link from 'next/link';
import React from 'react';

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

// TODO: Update menu items
const menuItems: MenuItem[] = [
  { label: 'Profile', icon: <Icons.User className='h-5 w-5' />, href: ROUTES?.LANDING_PAGE },
  { label: 'Order History', icon: <Icons.User className='h-5 w-5' />, href: ROUTES?.LANDING_PAGE },
  { label: 'Favorites', icon: <Icons.User className='h-5 w-5' />, href: ROUTES?.LANDING_PAGE },
  { label: 'Settings', icon: <Icons.User className='h-5 w-5' />, href: ROUTES?.LANDING_PAGE },
];

const UserDropdownMenu: React.FC = () => {
  return (
    <ul className='py-2'>
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className='flex cursor-pointer items-center gap-3 px-4 py-2 text-gray-800 text-sm hover:bg-gray-100'
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </ul>
  );
};

export default UserDropdownMenu;
