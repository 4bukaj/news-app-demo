import * as React from 'react';
import Box from '@mui/material/Box';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Content from '../../layouts/Content';
import Sidebar from '../../layouts/Sidebar';

const Home = () => {
  return (
    <Box>
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </Box>
  );
};

export default Home;
