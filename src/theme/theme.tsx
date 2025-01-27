import { PaletteMode } from '@mui/material';

const theme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#2563EB',
          },
          secondary: {
            main: '#10B981',
          },
          background: {
            default: '#F9FAFB',
            paper: '#FFFFFF',
          },
          text: {
            primary: '#1F2937',
            secondary: '#374151',
          },
        }
      : {
          primary: {
            main: '#3B82F6',
          },
          secondary: {
            main: '#22D3EE',
          },
          background: {
            default: '#111827',
            paper: '#1F2937',
          },
          text: {
            primary: '#F3F4F6',
            secondary: '#D1D5DB',
          },
        }),
  },
});

export default theme;
