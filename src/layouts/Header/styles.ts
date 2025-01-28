import { Palette } from '@mui/material';

const styles = {
  headerWrapper: {
    padding: '16px',
    backgroundColor: ({ palette }: { palette: Palette }) =>
      palette.primary.main,
  },
  headerIntro: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  headerTitle: {
    textTransform: 'uppercase',
    letterSpacing: '10px',
  },
  headerActions: {
    display: 'flex',
    justifyContent: {
      xs: 'center',
      sm: 'flex-end',
    },
    alignItems: 'center',
    gap: '16px',
  },
};

export default styles;
