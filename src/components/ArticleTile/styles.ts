import { Palette } from '@mui/material';

const styles = {
  wrapper: {
    borderRadius: '25px',
    overflow: 'hidden',
    boxShadow: '4px 4px 24px -20px rgba(66, 68, 90, 1)',
    cursor: 'pointer',
  },
  grid: {
    height: '350px',
  },
  list: {
    height: '100px',
    display: 'flex',
    gap: '8px',
  },
  gridImage: {
    width: '100%',
    height: '60%',

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  listImage: {
    width: '50%',
    maxWidth: '200px',

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  noImage: {
    backgroundColor: '#999',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  articleText: {
    padding: '16px',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  gridText: {
    height: '40%',
  },
  listText: {
    height: '100%',
  },
  articleSubtext: {
    display: 'flex',
    color: ({ palette }: { palette: Palette }) => palette.grey[500],
  },
  gridSubtext: {
    justifyContent: 'space-between',
  },
  listSubtext: {
    gap: '16px',
  },
};

export default styles;
