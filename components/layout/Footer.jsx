import { Box } from '@mui/material';
import React from 'react';

const Footer = () => {
  const overAll = () => ({
    width: '100%',
    backgroundColor: 'footerColor',
  });
  return <Box sx={overAll()}>Footer component</Box>;
};

export default Footer;
