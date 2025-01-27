import React, { useMemo, useState } from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  TextField,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../state/store';
import { closeSidebar } from '../../state/layout/layoutSlice';
import { useFetchData } from '../../hooks/fetchData';
import { Country } from '../../types/countries';
import { Link } from 'react-router';
import useDebounce from '../../hooks/useDebounce';

const Sidebar = () => {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.layout.sidebarOpened);

  const [searchValue, setSearchValue] = useState('');
  const debouncedSearch = useDebounce(searchValue, 200);

  const { data, error, loading } = useFetchData<Country[]>(
    'https://restcountries.com/v3.1/all?fields=name,cca2,translations,flags'
  );

  const filteredCountries = useMemo(() => {
    if (!data) return [];

    const search = debouncedSearch.toLowerCase();

    return data.filter(
      (country) =>
        country.name.common.toLowerCase().includes(search) ||
        country.name.official.toLowerCase().includes(search)
    );
  }, [data, debouncedSearch]);

  const handleCloseSidebar = () => dispatch(closeSidebar());

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const renderCountryList = () => {
    if (loading) {
      return Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} variant='rounded' width='100%' height={60} />
      ));
    }

    if (filteredCountries.length === 0) {
      return <ListItem>No matching countries found.</ListItem>;
    }

    return filteredCountries.map((country) => (
      <Link
        key={country.name.common}
        to={`/${country.cca2.toLowerCase()}`}
        onClick={handleCloseSidebar}
      >
        <ListItem sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ width: 32, height: 24 }}>
            <img
              src={country.flags?.svg || ''}
              alt={`${country.name.common} flag`}
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
          <ListItemText primary={country.name.common} />
        </ListItem>
      </Link>
    ));
  };

  if (!open) return null;

  return (
    <Drawer open={open} onClose={handleCloseSidebar}>
      <Box sx={{ width: 250 }} role='presentation'>
        <Box sx={{ padding: 2 }}>
          <TextField
            label='Search Country'
            variant='outlined'
            fullWidth
            value={searchValue}
            onChange={handleSearchChange}
          />
        </Box>
        <List>{renderCountryList()}</List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
