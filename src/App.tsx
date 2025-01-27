import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Country from './pages/Country';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';

const App = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<p>dupa</p>} />
          <Route path=':country' element={<Country />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
export default App;
