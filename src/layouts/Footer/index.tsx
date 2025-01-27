import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from './styles';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date().toLocaleTimeString());
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Box sx={styles.footerWrapper}>{currentTime}</Box>;
};

export default Footer;
