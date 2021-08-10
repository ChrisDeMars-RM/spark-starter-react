import React from 'react';
import GlobalLogo from '../GlobalLogo/GlobalLogo';
import GlobalNav from '../GlobalNav/GlobalNav';

const GlobalHeader = () => {
  return (
    <header className="header">
      <div className="header__content">
        <GlobalLogo />
        <GlobalNav />
      </div>
    </header>
  );
};

export default GlobalHeader;
