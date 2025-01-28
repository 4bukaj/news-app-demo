import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from './styles';

interface ContentDisclaimerProps {
  info: string;
}

export default function ContentDisclaimer({ info }: ContentDisclaimerProps) {
  return (
    <Box sx={styles.infoWrapper}>
      <Typography variant='h4'>{info}</Typography>
    </Box>
  );
}
