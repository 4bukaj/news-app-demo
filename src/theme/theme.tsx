import { PaletteMode } from '@mui/material';

const theme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#3B82F6',
          },
          secondary: {
            main: '#F59E0B',
          },
          success: {
            main: '#10B981',
          },
          error: {
            main: '#EF4444',
          },
          warning: {
            main: '#FACC15',
          },
          background: {
            default: '#F9FAFB',
            paper: '#FFFFFF',
          },
          text: {
            primary: '#111827',
            secondary: '#4B5563',
          },
          grey: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
          darkGrey: {
            500: '#4B5563',
            700: '#374151',
            900: '#1F2937',
          },
        }
      : {
          primary: {
            main: '#2563EB',
          },
          secondary: {
            main: '#D97706',
          },
          success: {
            main: '#059669',
          },
          error: {
            main: '#DC2626',
          },
          warning: {
            main: '#EAB308',
          },
          background: {
            default: '#1F2937',
            paper: '#111827',
          },
          text: {
            primary: '#F9FAFB',
            secondary: '#9CA3AF',
          },
          grey: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
          darkGrey: {
            500: '#6B7280',
            700: '#4B5563',
            900: '#374151',
          },
        }),
  },
});

export default theme;
