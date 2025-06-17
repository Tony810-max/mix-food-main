import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import React from 'react';
import AuthActions from '../AuthActions';
import Logo from '../Logo';
import Navbar from '../Navbar';

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className='lg:hidden'>
        <AlignJustify color='var(--primary-color)' />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='flex items-center justify-between'>
            <Logo className='flex' />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className='relative h-[calc(100vh-88px)]'>
          <div>
            <Separator />
            <Navbar />
          </div>
          <AuthActions />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
