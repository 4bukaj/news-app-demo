const styles = {
  listWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '16px',
  },
  listItem: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',

    '&:not(:last-child)': {
      borderBottom: '1px solid red',
    },
  },
  flagContainer: {
    width: '40px',
    height: '20px',

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  },
};

export default styles;
