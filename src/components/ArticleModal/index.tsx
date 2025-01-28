import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import styles from './styles';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import CloseIcon from '@mui/icons-material/Close';
import { closeModal } from '../../state/layout/layoutSlice';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router';

export default function ArticleModal() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.layout.modalOpened);
  const articleData = useSelector(
    (state: RootState) => state.article.articleData
  );

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!open) return null;

  return createPortal(
    <>
      <Box sx={styles.modalOverlay} onClick={handleClose} />
      <Box sx={styles.modalWrapper}>
        <Box>
          <Box sx={styles.imageWrapper}>
            <img src={articleData.urlToImage} alt={articleData.title} />
          </Box>
          <Box sx={styles.textWrapper}>
            <Typography variant='h5'>{articleData.title}</Typography>
            <Typography variant='body2'>{articleData.content}</Typography>
            <Box>
              <Typography variant='body2' color='grey.600'>
                {`Author: ${articleData.author}`}
              </Typography>
              <Typography variant='body2' color='grey.600'>
                {`Source: ${articleData.source.name}`}
              </Typography>
            </Box>
            <Box sx={styles.modalControls}>
              <Link to={articleData.url} target='_blank'>
                <Button variant='outlined' endIcon={<OpenInNewIcon />}>
                  Read full article
                </Button>
              </Link>
              <Button
                variant='contained'
                endIcon={<CloseIcon />}
                onClick={handleClose}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>,
    document.getElementById('portal')
  );
}
