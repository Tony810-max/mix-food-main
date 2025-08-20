import type { IFeature } from './types';

export const getDataFeature = (t: (key: string) => string): IFeature[] => [
  {
    id: 2,
    img: '/images/landingPage/tomyum.webp',
    title: t('nameTomyum'),
    description: t('descFeatureTomyum'),
    category: 'mon chinh',
    price: 100000,
  },
  {
    id: 3,
    img: '/images/landingPage/goitomthailan.webp',
    title: t('nameShrimp'),
    description: t('descFeaturePadThai'),
    category: 'mon chinh',
    price: 100000,
  },
  {
    id: 4,
    img: '/images/landingPage/du-du.webp',
    title: t('nameSonTam'),
    description: t('descFeatureSomTum'),
    category: 'mon chinh',
    price: 100000,
  },
];

export const getDataPopular = (t: (key: string) => string): IFeature[] => [
  {
    id: 1,
    img: '/images/landingPage/tomyum.webp',
    title: t('nameTomyum'),
    description: t('descTomyum'),
    category: 'mon chinh',
    price: 100000,
  },
  {
    id: 2,
    img: '/images/landingPage/padthai.webp',
    title: t('namePad'),
    description: t('descPad'),
    category: 'mon chinh',
    price: 100000,
  },
  {
    id: 3,
    img: '/images/landingPage/curry.webp',
    title: t('nameCurry'),
    description: t('descCurry'),
    category: 'mon chinh',
    price: 100000,
  },
  {
    id: 4,
    img: '/images/landingPage/mango2.webp',
    title: t('nameMangoDesert'),
    description: t('descDessert'),
    category: 'mon chinh',
    price: 100000,
  },
];
