import { ReactElement } from 'react';

export type NavbarItem = {
  key: string;
  label: string;
  path: string;
  icon?: ReactElement;
  children?: NavbarItem[];
};
