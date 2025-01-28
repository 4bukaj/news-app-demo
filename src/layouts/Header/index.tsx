import React from 'react';

import {
  Box,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';

import styles from './styles';
import ColorModeToggle from '../../components/ColorModeToggle';
import { useDispatch } from 'react-redux';
import { openSidebar, toggleLayout } from '../../state/layout/layoutSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { Layout } from '../../types/layout';

export default function Header() {
  const dispatch = useDispatch();
  const layout = useSelector((state: RootState) => state.layout.layout);

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };

  const handleLayoutChange = (
    event: React.MouseEvent<HTMLElement>,
    newLayoutValue: Layout
  ) => {
    if (!newLayoutValue) return;

    dispatch(toggleLayout(newLayoutValue));
  };

  return (
    <Box sx={styles.headerWrapper}>
      <Box sx={styles.headerIntro}>
        <IconButton onClick={handleOpenSidebar}>
          <MenuIcon fontSize='large' />
        </IconButton>
        <Typography variant='h5' sx={styles.headerTitle}>
          News App
        </Typography>
      </Box>
      <Box sx={styles.headerActions}>
        <ToggleButtonGroup
          value={layout}
          exclusive
          onChange={handleLayoutChange}
        >
          <ToggleButton value='grid'>
            <GridViewIcon />
          </ToggleButton>
          <ToggleButton value='list'>
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ColorModeToggle />
      </Box>
    </Box>
  );
}
