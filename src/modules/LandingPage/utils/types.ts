export interface IFeature {
  id: number;
  img: string;
  title: string;
  description: string;
  category: string;
  time: string;
  price: string | number;
}

export interface IReview {
  name: string;
  date: string;
  rating: number;
  review: string;
}
