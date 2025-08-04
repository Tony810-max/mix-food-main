export interface IFeature {
  id: number;
  img: string;
  title: string;
  description: string;
  category: string;
  price: string;
  isBestSeller: boolean;
}

export interface IReview {
  name: string;
  date: string;
  rating: number;
  review: string;
}
