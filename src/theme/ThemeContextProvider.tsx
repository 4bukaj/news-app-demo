import { createTheme } from '@mui/material';
import React, { createContext, FC, PropsWithChildren, useContext } from 'react';
import { ThemeContextType } from './types';
import { useColorTheme } from './use-color-theme';

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  theme: createTheme(),
  toggleColorMode: () => {},
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
