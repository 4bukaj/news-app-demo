import React from 'react';

import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import styles from './styles';
import ColorModeToggle from '../../components/ColorModeToggle';
import { useDispatch } from 'react-redux';
import { openSidebar } from '../../state/layout/layoutSlice';

export default function Header() {
  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };

  return (
    <Box sx={styles.headerWrapper}>
      <Box sx={styles.headerIntro}>
        <IconButton onClick={handleOpenSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography>News App</Typography>
      </Box>
      <Box>
        <ColorModeToggle />
      </Box>
    </Box>
  );
}
