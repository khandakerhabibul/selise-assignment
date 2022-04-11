import React from 'react';
import { TopNavbar } from '@Component/Navbar';
import useResponsive from '@Hooks/useResponsive';

const Header = () => {
  const { isTab, isMobile } = useResponsive();

  if (isTab || isMobile) return <div>Side nav</div>;

  return <TopNavbar />;
};

export default Header;
