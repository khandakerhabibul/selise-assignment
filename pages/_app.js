import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import CustomThemeProvider from '@Theme/CustomThemProvider';
import createEmotionCache from '@Utils/createEmotionCache';
import ResponsiveLayoutProvider from '@Context/ResponsiveLayoutProvider';
import Header from '@Layout/Header';
import { Box } from '@mui/material';
import Footer from '@Layout/Footer';
import CartProvider from '@Context/CartProvider';
import SiteMap from '@Component/SiteMap/SiteMap';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>ViCAFE</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <CustomThemeProvider>
        <CssBaseline />
        <ResponsiveLayoutProvider>
          <CartProvider>
            <Header />
            <Box sx={{ mx: 12 }}>
              <Box display='flex'>
                <Box mr={4}>
                  <Component {...pageProps} />
                </Box>
                <Box>
                  <SiteMap />
                </Box>
              </Box>
            </Box>
          </CartProvider>
        </ResponsiveLayoutProvider>
      </CustomThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
