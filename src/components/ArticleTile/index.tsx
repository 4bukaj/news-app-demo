import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { Article } from '../../types/articles';
import styles from './styles';
import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';

export default function ArticleTile({ article }: { article: Article }) {
  const layout = useSelector((state: RootState) => state.layout.layout);

  return (
    <Grid
      size={layout === 'grid' ? 4 : 12}
      sx={[styles.wrapper, styles[layout]]}
    >
      <Box sx={styles[`${layout}Image`]}>
        <img src={article.urlToImage} alt={article.title} />
      </Box>
      <Box>
        <Typography>{article.title}</Typography>
      </Box>
    </Grid>
  );
}
