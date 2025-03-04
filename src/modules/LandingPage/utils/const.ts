import type { IFeature, IReview } from '@/types/common';

export const limit = 12;

export const getDataFeature = (t: (key: string) => string): IFeature[] => [
  {
    id: 1,
    img: '/images/landingPage/food-1.webp',
    title: t('nameFoodPadGai'),
    desr: t('descFeaturePadGai'),
  },
  {
    id: 2,
    img: '/images/landingPage/Tomyum.webp',
    title: t('nameTomyum'),
    desr: t('descFeatureTomyum'),
  },
  {
    id: 3,
    img: '/images/landingPage/padthai.webp',
    title: t('namePad'),
    desr: t('descFeaturePadThai'),
  },
  {
    id: 4,
    img: '/images/landingPage/Sontam.webp',
    title: t('nameSonTam'),
    desr: t('descFeatureSomTum'),
  },
  {
    id: 5,
    img: '/images/landingPage/Mango.webp',
    title: t('nameMangoDesert'),
    desr: t('descFeatureMango'),
  },
];

export const getDataPopular = (t: (key: string) => string): IFeature[] => [
  {
    id: 1,
    img: '/images/landingPage/tomyum2.webp',
    title: t('nameTomyum'),
    desr: t('descTomyum'),
  },
  {
    id: 2,
    img: '/images/landingPage/padthai2.webp',
    title: t('namePad'),
    desr: t('descPad'),
  },
  {
    id: 3,
    img: '/images/landingPage/curry.webp',
    title: t('nameCurry'),
    desr: t('descCurry'),
  },
  {
    id: 4,
    img: '/images/landingPage/mango2.webp',
    title: t('nameMangoDesert'),
    desr: t('descDessert'),
  },
];

export const dataReview: IReview[] = [
  {
    id: 1,
    name: 'John Doe',
    date: 'July 15, 2022',
    rating: 4,
    review: 'I love the pad thai and tom yum goong. The taste is authentic and the portion is good too.',
  },
  {
    id: 2,
    name: 'Tommmy',
    date: 'July 12, 2022',
    rating: 5,
    review: 'I love the pad thai and tom yum goong. The taste is authentic and the portion is good too.',
  },
  {
    id: 3,
    name: 'Tony',
    date: 'July 12, 2022',
    rating: 4,
    review: 'I love the pad thai and tom yum goong. The taste is authentic and the portion is good too.',
  },
  {
    id: 4,
    name: 'Tony',
    date: 'July 16, 2022',
    rating: 5,
    review: 'I love the pad thai and tom yum goong. The taste is authentic and the portion is good too.',
  },
];
