import { Box } from '@mui/material';
import React from 'react';
import styles from './styles';
import { Outlet } from 'react-router';

export default function Content() {
  return (
    <Box sx={styles.contentWrapper}>
      <Outlet />
    </Box>
  );
}
