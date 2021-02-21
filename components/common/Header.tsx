import React from 'react';
import HeaderContainer from './header/HeaderContainer';
import HeaderNav from './header/HeaderNav';

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <header
      id="header"
      className="header-effect-shrink"
      data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': true, 'stickyStartAt': 40, 'stickyHeaderContainerHeight': 70}"
    >
      <div className="header-body border-top-0">
        <HeaderContainer />
        <HeaderNav />
      </div>
    </header>
  );
}

export default Header;
