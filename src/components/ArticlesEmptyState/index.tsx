import { Box, Typography } from '@mui/material';
import React from 'react';

interface ArticlesEmptyStateProps {
  country: string;
}

export default function ArticlesEmptyState({
  country,
}: ArticlesEmptyStateProps) {
  return (
    <Box>
      <Typography>{`No articles found for ${country}`}</Typography>
    </Box>
  );
}
