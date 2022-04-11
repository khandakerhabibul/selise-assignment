import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  overAll: {
    width: '100%',
    backgroundColor: theme.palette.buzzFooterColor,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return <Box className={classes.overAll}>Footer component</Box>;
};

export default Footer;
