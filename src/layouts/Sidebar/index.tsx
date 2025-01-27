import React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../../state/layout/layoutSlice';
import { useFetchData } from '../../hooks/fetchData';
import { Country } from '../../types/countries';
import { Link } from 'react-router';
import styles from './styles';

const Sidebar = () => {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.layout.sidebarOpened);

  const { data, error, loading } = useFetchData<Country[]>(
    'https://restcountries.com/v3.1/all'
  );

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  const createParamName = (country: string) => {
    return country.toLowerCase().replace(' ', '-');
  };

  if (!open) return;

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' onClick={handleCloseSidebar}>
      <List>
        {data.map((country, index) => (
          <Link
            key={country.name.common}
            to={`/${createParamName(country.name.common)}`}
          >
            <ListItem sx={styles.listItem}>
              <Box sx={styles.flagContainer}>
                <img
                  src={country.flags.svg}
                  alt={`${country.name.common} flag`}
                />
              </Box>
              <ListItemText primary={country.name.common} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer open={open} onClose={handleCloseSidebar}>
      {DrawerList}
    </Drawer>
  );
};

export default Sidebar;
