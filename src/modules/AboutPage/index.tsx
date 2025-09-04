import { useTranslations } from 'next-intl';
import React from 'react';
import HeroSection from '../../components/HeroSection';
import AboutSection from './components/AboutSection';
import AchievementSection from './components/AchievementSection';
import ConnectSection from './components/ConnectSection';

const AboutPage = () => {
  const t = useTranslations('AboutPage');

  const story = t('story');
  const specialties = [t('specialty1'), t('specialty2'), t('specialty3'), t('specialty4')];

  return (
    <div className='min-h-screen bg-gray-50'>
      <HeroSection title={t('title')} subtitle={t('subtitle')} />
      <AboutSection story={story} specialties={specialties} />
      <AchievementSection />
      <ConnectSection />
    </div>
  );
};

export default AboutPage;
