// import { overrides } from './overrides';
import { createTheme } from '@mui/material';
import { components } from './components';
import { palette } from './palette';
// import { props } from './props';
import { typography } from './typography';

const theme = createTheme({
  ...typography,
  ...palette,
  ...components,
  // ...props,
});
// const isWeb = useMediaQuery('(min-width:1161px');
// const isMobile = useMediaQuery('(max-width:450px)');
// const isTab = useMediaQuery('(max-width:1160px) and (min-width:451px)');
const fontFamily = {
  fontFamily: [
    'Noto Sans',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
};

theme.typography.body1 = {
  ...fontFamily,
  fontSize: '1rem',
  '@media (min-width:1161px)': {
    fontSize: '1.1rem',
  },
  '@media (max-width:1160px) and (min-width: 451px)': {
    fontSize: '1.1rem',
  },
  '@media (max-width: 450px)': {
    fontSize: '1rem',
  },
};

theme.typography.body2 = {
  ...fontFamily,
  fontSize: '1rem',
  '@media (min-width:1161px)': {
    fontSize: '1rem',
  },
  '@media (max-width:1160px) and (min-width: 451px)': {
    fontSize: '0.9rem',
  },
  '@media (max-width: 450px)': {
    fontSize: '0.8rem',
  },
};

theme.typography.h2 = {
  ...fontFamily,
  // fontSize: '1rem',
  '@media (min-width:1161px)': {
    fontSize: '5rem',
  },
  '@media (max-width:1160px) and (min-width: 451px)': {
    fontSize: '3rem',
  },
  '@media (max-width: 450px)': {
    fontSize: '2rem',
  },
};

theme.typography.h3 = {
  ...fontFamily,
  // fontSize: '1rem',
  '@media (min-width:1161px)': {
    fontSize: '3rem',
  },
  '@media (max-width:1160px) and (min-width: 451px)': {
    fontSize: '2rem',
  },
  '@media (max-width: 450px)': {
    fontSize: '1.5rem',
  },
};

theme.typography.h4 = {
  ...fontFamily,
  // fontSize: '1rem',
  '@media (min-width:1161px)': {
    fontSize: '2rem',
  },
  '@media (max-width:1160px) and (min-width: 451px)': {
    fontSize: '1.5rem',
  },
  '@media (max-width: 450px)': {
    fontSize: '1.2rem',
  },
};

// theme.typography.button = {
//   ...fontFamily,
//   '@media (min-width:1161px)': {
//     fontSize: '1.3rem',
//   },
// };

export default theme;
