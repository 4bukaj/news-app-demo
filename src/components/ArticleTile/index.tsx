import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { Article } from '../../types/articles';
import styles from './styles';
import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { openModal } from '../../state/layout/layoutSlice';
import { updateArticleData } from '../../state/article/articleSlice';
import { tileGridBreakpoints } from '../../utils/breakpoints';

export default function ArticleTile({ article }: { article: Article }) {
  const dispatch = useDispatch();
  const layout = useSelector((state: RootState) => state.layout.layout);

  const renderTitle = (title: string) => {
    const maxLength = 110;
    const length = title.length;

    if (length <= maxLength) return title;

    return title.substring(0, maxLength) + '...';
  };

  const handleShowArticleDetails = () => {
    dispatch(updateArticleData(article));
    dispatch(openModal());
  };

  return (
    <Grid
      size={layout === 'grid' ? tileGridBreakpoints : 12}
      sx={[styles.wrapper, styles[layout]]}
      onClick={handleShowArticleDetails}
    >
      <Box sx={[styles.imageWrapper, styles[`${layout}Image`]]}>
        {article.urlToImage ? (
          <img src={article.urlToImage} alt={article.title} />
        ) : (
          <Box sx={styles.noImage}>
            <BrokenImageIcon fontSize='large' />
          </Box>
        )}
      </Box>
      <Box sx={[styles.articleText, styles[`${layout}Text`]]}>
        <Typography>{renderTitle(article.title)}</Typography>
        <Box sx={[styles.articleSubtext, styles[`${layout}Subtext`]]}>
          <Typography variant='caption'>
            {format(article.publishedAt, 'dd/MM/yyyy')}
          </Typography>
          <Typography variant='caption'>{article.author}</Typography>
        </Box>
      </Box>
    </Grid>
  );
}
