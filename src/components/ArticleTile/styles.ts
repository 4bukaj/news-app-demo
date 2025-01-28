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
    height: '120px',
    display: 'flex',
    gap: '8px',
  },
  imageWrapper: {
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  gridImage: {
    width: '100%',
    height: '60%',
  },
  listImage: {
    width: '200px',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  gridText: {
    height: '40%',
  },
  listText: {
    height: '100%',
    width: '100%',
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
