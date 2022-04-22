import React, { useEffect, useState } from 'react';

export const ResponsiveLayoutContext = React.createContext(null);

const ResponsivePureJsProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isWeb, setIsWeb] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 450) {
      setIsMobile(true);
      setIsTab(false);
      setIsWeb(false);
    } else if (window.innerWidth >= 451 && window.innerWidth <= 1160) {
      setIsMobile(false);
      setIsTab(true);
      setIsWeb(false);
    } else if (window.innerWidth >= 1161) {
      setIsMobile(false);
      setIsTab(false);
      setIsWeb(true);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <ResponsiveLayoutContext.Provider value={{ isWeb, isTab, isMobile }}>
      {children}
    </ResponsiveLayoutContext.Provider>
  );
};

export default ResponsivePureJsProvider;
