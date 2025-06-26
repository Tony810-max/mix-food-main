import HeadingProfile from '@/modules/ProfilePage/components/HeadingProfile';
import FormPersonal from './FormPersonal';

const PersonalInfoForm = () => {
  return (
    <div className='rounded-lg bg-white p-8 shadow-md'>
      <HeadingProfile />
      <div className='mb-2 text-gray-500 text-sm'>Manage your personal details and contact information</div>
      <FormPersonal />
    </div>
  );
};

export default PersonalInfoForm;
