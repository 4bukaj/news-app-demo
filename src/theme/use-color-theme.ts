import { createTheme, PaletteMode } from '@mui/material';
import { useMemo, useState } from 'react';
import theme from './theme';

export const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const toggleColorMode = () => {
    setMode((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };

  const updatedTheme = useMemo(() => createTheme(theme(mode)), [mode]);

  return {
    theme: updatedTheme,
    mode,
    toggleColorMode,
  };
};
