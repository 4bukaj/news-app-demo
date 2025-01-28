import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './views/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';
import Articles from './views/Articles';
import ContentDisclaimer from './components/ContentDisclaimer';

const App = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route
            index
            element={
              <ContentDisclaimer info='Please select a country by opening the sidebar' />
            }
          />
          <Route path=':country' element={<Articles />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
export default App;
