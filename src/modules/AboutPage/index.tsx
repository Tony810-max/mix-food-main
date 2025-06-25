import React from 'react';
import { useTranslations } from 'next-intl';
import AboutSection from './components/AboutSection';
import ConnectSection from './components/ConnectSection';
import HeroSection from '../../components/HeroSection';

// All text is now translated using next-intl

const AboutPage = () => {
  const t = useTranslations('AboutPage');

  const story = t('story');
  const specialties = [t('specialty1'), t('specialty2'), t('specialty3'), t('specialty4')];

  return (
    <div className='min-h-screen bg-gray-50'>
      <HeroSection title={t('title')} subtitle={t('subtitle')} />
      <AboutSection story={story} specialties={specialties} />
      <ConnectSection />
    </div>
  );
};

export default AboutPage;
