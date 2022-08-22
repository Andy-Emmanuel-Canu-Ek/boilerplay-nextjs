import React, { useState, PropsWithChildren } from 'react';
import Navbar from 'components/layouts/Navbar';
import clsx from 'clsx';
import Header from '../Header';

const MainPage = ({ children }: PropsWithChildren) => {
  const [showMenu, setShowMenu] = useState(true);

  const menuActions = { showMenu, setShowMenu };

  const bodyClass = clsx('body-container', { 'body-pd': showMenu });

  return (
    <div className={bodyClass}>
      <Header menuActions={menuActions} />
      <Navbar showMenu={showMenu} />
      {children}
    </div>
  );
};

export default MainPage;
