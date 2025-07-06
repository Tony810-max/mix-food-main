'use client';
import CardProfile from './components/CardProfile';
import TabContent from './components/TabContent';

const ProfilePage = () => {
  return (
    <div className='container mx-auto mt-16 space-y-8 py-10'>
      <CardProfile />
      <TabContent />
    </div>
  );
};

export default ProfilePage;
