import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import LoginAuth from './LoginAuth';
import RegisterAuth from './RegisterAuth';

export interface IActiveAuth {
  onSetActive: (value: boolean) => void;
}

const TabAuth: React.FC<IActiveAuth> = ({ onSetActive }) => {
  const [tab, setTab] = React.useState<string>('login');

  return (
    <Tabs value={tab} onValueChange={setTab}>
      <TabsList className='w-full'>
        <TabsTrigger value='login' className='w-full '>
          Sign In
        </TabsTrigger>
        <TabsTrigger value='register' className='w-full'>
          Sign Up
        </TabsTrigger>
      </TabsList>
      <TabsContent value={'login'}>
        <LoginAuth onSetActive={onSetActive} />
      </TabsContent>
      <TabsContent value={'register'}>
        <RegisterAuth onSetTab={setTab} />
      </TabsContent>
    </Tabs>
  );
};

export default TabAuth;
