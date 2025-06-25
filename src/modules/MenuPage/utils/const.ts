// Thai menu categories and products mock data

import type { ICardFoodProps } from '@/components/CardFood';

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: 'curries', name: 'Curries' },
  { id: 'noodles', name: 'Noodles' },
  { id: 'desserts', name: 'Desserts' },
];

export const products: ICardFoodProps[] = [
  {
    title: 'Green Curry',
    description: 'Classic Thai green curry with chicken, eggplant, and basil.',
    category: 'curries',
    img: '/images/landingPage/tomyum2.webp',
    time: '30 minutes',
    price: '$10',
  },
];
