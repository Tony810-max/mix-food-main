import type { IFeature } from './types';

export const getDataFeature = (t: (key: string) => string): IFeature[] => [
  {
    id: 1,
    img: '/images/landingPage/food-1.webp',
    title: t('nameFoodPadGai'),
    description: t('descFeaturePadGai'),
  },
  {
    id: 2,
    img: '/images/landingPage/Tomyum.webp',
    title: t('nameTomyum'),
    description: t('descFeatureTomyum'),
  },
  {
    id: 3,
    img: '/images/landingPage/padthai.webp',
    title: t('namePad'),
    description: t('descFeaturePadThai'),
  },
  {
    id: 4,
    img: '/images/landingPage/Sontam.webp',
    title: t('nameSonTam'),
    description: t('descFeatureSomTum'),
  },
  // {
  //   id: 5,
  //   img: '/images/landingPage/Mango.webp',
  //   title: t('nameMangoDesert'),
  //   description: t('descFeatureMango'),
  // },
];

export const getDataPopular = (t: (key: string) => string): IFeature[] => [
  {
    id: 1,
    img: '/images/landingPage/tomyum2.webp',
    title: t('nameTomyum'),
    description: t('descTomyum'),
  },
  {
    id: 2,
    img: '/images/landingPage/padthai2.webp',
    title: t('namePad'),
    description: t('descPad'),
  },
  {
    id: 3,
    img: '/images/landingPage/curry.webp',
    title: t('nameCurry'),
    description: t('descCurry'),
  },
  {
    id: 4,
    img: '/images/landingPage/mango2.webp',
    title: t('nameMangoDesert'),
    description: t('descDessert'),
  },
];
