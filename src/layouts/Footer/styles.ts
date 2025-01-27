import { Palette } from '@mui/material';

const styles = {
  footerWrapper: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: ({ palette }: { palette: Palette }) =>
      palette.primary.main,
  },
};

export default styles;
