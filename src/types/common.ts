import type { LucideIcon } from 'lucide-react';

export interface IHeading {
  title: string;
}

export interface IIconLabel {
  Icon: LucideIcon;
  label: string;
}

export interface INav {
  label: string;
  href: string;
}

export interface TResponse<T> {
  meta: IMeta;
  data: T;
}

export interface IMeta {
  code: number;
  message: string;
}
