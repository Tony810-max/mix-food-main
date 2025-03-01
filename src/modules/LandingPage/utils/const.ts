export const limit = 12;

export const getDataFeature = (t: (key: string) => string) => [
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
