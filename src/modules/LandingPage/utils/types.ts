import type { ICardFoodProps } from '@/components/CardFood';

export interface IFeature extends ICardFoodProps {
  id: number;
  img: string;
  title: string;
  price: number | string;
}

export interface IReview {
  name: string;
  date: string;
  rating: number;
  review: string;
}
