import React from 'react';
import { useParams } from 'react-router';
import { useFetchData } from '../../hooks/fetchData';
import { ArticlesResponse } from '../../types/articles';
import ArticleTile from '../../components/ArticleTile';
import styles from './styles';
import { Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import Grid from '@mui/material/Grid2';
import ArticleInfo from '../../components/ContentDisclaimer';
import { tileGridBreakpoints } from '../../utils/breakpoints';

const Articles = () => {
  const { country } = useParams();
  const layout = useSelector((state: RootState) => state.layout.layout);

  const { data, error, loading } = useFetchData<ArticlesResponse>(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`
  );

  if (!data) return;

  if (!data.articles.length)
    return <ArticleInfo info={'Sorry, no articles found :('} />;

  return (
    <Grid container spacing={{ xs: 2, sm: 4 }} sx={styles.gridWrapper}>
      {loading ? (
        Array.from({ length: 10 }).map((_, index) => (
          <Grid size={layout === 'grid' ? tileGridBreakpoints : 12}>
            <Skeleton
              key={index}
              variant='rounded'
              width={'100%'}
              height={200}
            />
          </Grid>
        ))
      ) : error ? (
        <ArticleInfo info={error.message} />
      ) : (
        data.articles.map((article, index) => (
          <ArticleTile key={'article' + index} article={article} />
        ))
      )}
    </Grid>
  );
};

export default Articles;
