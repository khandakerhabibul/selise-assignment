import { useContext } from 'react';
import { ResponsiveLayoutContext } from '../context/ResponsiveLayoutProvider';

const usePureJsResponsive = () => {
  const { isWeb, isTab, isMobile } = useContext(ResponsiveLayoutContext);
  return { isWeb, isTab, isMobile };
};

export default usePureJsResponsive;
