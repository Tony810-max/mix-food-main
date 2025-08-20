import type { IFeature } from './types';

export const getDataFeature = (t: (key: string) => string): IFeature[] => [
  {
    id: 1,
    img: '/images/landingPage/food-1.webp',
    title: t('nameFoodPadGai'),
    description: t('descFeaturePadGai'),
    category: 'mon chinh',
    time: '30 minutes',
    price: '$10',
  },
  {
    id: 2,
    img: '/images/landingPage/Tomyum.webp',
    title: t('nameTomyum'),
    description: t('descFeatureTomyum'),
    category: 'mon chinh',
    time: '30 minutes',
    price: '$10',
  },
  {
    id: 3,
    img: '/images/landingPage/padthai.webp',
    title: t('namePad'),
    description: t('descFeaturePadThai'),
    category: 'mon chinh',
    time: '30 minutes',
    price: '$10',
  },
  {
    id: 4,
    img: '/images/landingPage/Sontam.webp',
    title: t('nameSonTam'),
    description: t('descFeatureSomTum'),
    category: 'mon chinh',
    time: '30 minutes',
    price: '$10',
  },
];

export const getDataPopular = (t: (key: string) => string): IFeature[] => [
  {
    id: 1,
    img: '/images/landingPage/tomyum2.webp',
    title: t('nameTomyum'),
    description: t('descTomyum'),
    category: 'mon chinh',
    time: '30 minutes',
    price: '$10',
  },
  {
    id: 2,
    img: '/images/landingPage/padthai2.webp',
    title: t('namePad'),
    description: t('descPad'),
    category: 'mon chinh',
    time: '30 minutes',
    price: '$10',
  },
  {
    id: 3,
    img: '/images/landingPage/curry.webp',
    title: t('nameCurry'),
    description: t('descCurry'),
    category: 'mon chinh',
    time: '30 minutes',
    price: '$10',
  },
  {
    id: 4,
    img: '/images/landingPage/mango2.webp',
    title: t('nameMangoDesert'),
    description: t('descDessert'),
    category: 'mon chinh',
    time: '30 minutes',
    price: '$10',
  },
];
