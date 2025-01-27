import { Theme } from '@mui/material';

export type ThemeContextType = {
  mode: 'light' | 'dark';
  theme: Theme;
  toggleColorMode: () => void;
};
