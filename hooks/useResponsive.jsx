import { ResponsiveLayoutContext } from '@Context/ResponsiveLayoutProvider';
import { useContext } from 'react';

const useResponsive = () => {
  const { isWeb, isMobile, isTab } = useContext(ResponsiveLayoutContext);
  return { isWeb, isMobile, isTab };
};

export default useResponsive;
