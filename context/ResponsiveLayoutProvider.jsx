import { useMediaQuery } from '@mui/material';
import React from 'react';

export const ResponsiveLayoutContext = React.createContext(null);

const ResponsiveLayoutProvider = ({ children }) => {
  const isWeb = useMediaQuery('(min-width:1161px');
  const isMobile = useMediaQuery('(max-width:450px)');
  const isTab = useMediaQuery('(max-width:1160px) and (min-width:451px)');

  return (
    <ResponsiveLayoutContext.Provider value={{ isWeb, isTab, isMobile }}>
      {children}
    </ResponsiveLayoutContext.Provider>
  );
};

export default ResponsiveLayoutProvider;
