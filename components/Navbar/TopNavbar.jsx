/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { getRoutes } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { isActivePath } from 'utils/helpers';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const overAllStyle = () => ({ background: 'buzzNavbarColor' });
const containerStyle = () => ({
  maxWidth: 1920,
  mx: 9,
  backgroundColor: 'buzzNavbarColor',
});
const activeLinkStyle = (isActive) =>
  isActive ? { color: 'primary.main', fontWeight: 'bold' } : {};
const linkDividerStyle = () => ({
  backgroundColor: 'primary.main',
  borderRadius: '6px 6px 0px 0px',
  height: 4,
  width: '100%',
});

const TopNavbar = () => {
  const routes = getRoutes();
  const { pathname } = useRouter();

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      sx={overAllStyle()}
    >
      <Box
        flexGrow={1}
        sx={containerStyle()}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box display='flex' alignItems='center'>
          <AcUnitIcon />
          <Box display='flex'>
            {routes.map(({ name, link }) => {
              const isActive = isActivePath(link, pathname);
              return (
                <Box key={name} mx={2}>
                  <Link href={link}>
                    <a
                      css={css`
                        text-decoration: 'none';
                      `}
                    >
                      <Box my={2}>
                        <Typography
                          color='textSecondary'
                          sx={activeLinkStyle(isActive)}
                        >
                          {name}
                        </Typography>
                      </Box>
                      {isActive && <Box sx={linkDividerStyle()} />}
                    </a>
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <Link href='/register'>
              <a>
                <Typography>Sign in / Register</Typography>
              </a>
            </Link>
            <Box ml={4}>
              <Button variant='contained' color='primary' size='large'>
                Get in touch
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopNavbar;
