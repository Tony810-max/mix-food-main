'use client';
import CardProfile from './components/CardProfile';
import TabContent from './components/TabContent';

const ProfilePage = () => {
  return (
    <div className='container mx-auto space-y-8 pt-20 pb-[calc(5rem-62px)]'>
      <CardProfile />
      <TabContent />
    </div>
  );
};

export default ProfilePage;
