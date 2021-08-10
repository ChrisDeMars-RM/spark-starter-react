import React from 'react';
import GlobalHeader from './GlobalHeader/GlobalHeader';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      <main className="sprk-o-CenteredColumn sprk-u-ptl">{children}</main>
    </>
  );
};

export default Layout;
