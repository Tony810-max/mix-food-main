export interface IFeature {
  id: number;
  img: string;
  title: string;
  desr: string;
}

export interface IReview {
  id?: number;
  name: string;
  date: string;
  rating: number;
  review: string;
  index: number;
}

export interface ICard {
  index: number;
  img: string;
  title: string;
  desr: string;
  className?: string;
}
