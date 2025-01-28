const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.65)',
  },
  modalWrapper: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '25px',
    width: {
      xs: '90%',
      md: '60%',
    },
    minHeight: '50vh',
    maxHeight: '90vh',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  closeBtn: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
  imageWrapper: {
    width: '100%',

    img: {
      width: '100%',
      objectFit: 'cover',
    },
  },
  textWrapper: {
    padding: '24px 32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  modalControls: {
    display: 'flex',
    gap: '16px',
    alignItem: 'center',
    justifyContent: 'flex-end',
  },
};

export default styles;
