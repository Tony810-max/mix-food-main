import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

import {
  AtSign,
  Calendar,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Globe,
  Lock,
  Mail,
  MailIcon,
  PenLine,
  Phone,
  ShieldCheck,
  ThumbsDown,
  ThumbsUp,
  User,
  Utensils,
  X,
} from 'lucide-react';
import file from './svg/file.svg';
import github from './svg/github.svg';
import globe from './svg/globe.svg';
import google from './svg/google.svg';
import microsoft from './svg/microsoft.svg';
import window from './svg/window.svg';

export const IconList = {
  google,
  microsoft,
  github,
  globe,
  file,
  window,
  Eye,
  Lock,
  MailIcon,
  ThumbsDown,
  ThumbsUp,
  Utensils,
  User,
  EyeOff,
  Phone,
  Calendar,
  PenLine,
  Globe,
  X,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  AtSign,
  Mail,
};

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = IconList as Record<keyof typeof IconList, Icon>;
