import React from 'react';
import { useParams } from 'react-router';
import { useFetchData } from '../../hooks/fetchData';
import { ArticlesResponse } from '../../types/articles';
import ArticleTile from '../../components/ArticleTile';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import styles from './styles';

const Articles = () => {
  const { country } = useParams();

  const { data, error, loading } = useFetchData<ArticlesResponse>(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=c89fc1d0039b4868b3b7c63118fafaca`
  );

  if (!data) return;

  if (!data.articles.length) return <p>No articles</p>;

  return (
    <Grid container spacing={4} sx={styles.gridWrapper}>
      {data.articles.map((article, index) => (
        <ArticleTile key={'article' + index} article={article} />
      ))}
    </Grid>
  );
};

export default Articles;
