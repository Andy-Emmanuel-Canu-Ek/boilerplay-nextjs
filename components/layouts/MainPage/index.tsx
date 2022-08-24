import clsx from 'clsx';
import Header from '../Header';
import Navbar from '@/components/layouts/Navbar';
import React, { useState, PropsWithChildren } from 'react';
import Unauthorized from 'components/layouts/Unauthorized';
import { useStorage } from 'hooks/useStorage';
import { SESSION_KEY_STORAGE } from 'shared/constants/const';
import styles from 'components/layouts/MainPage/Main.module.css';

const MainPage = ({ children }: PropsWithChildren) => {
  // const { getStorageData } = useStorage(SESSION_KEY_STORAGE);
  // const sessionStorage = getStorageData();
  // const { authenticated } = sessionStorage;

  const [showMenu, setShowMenu] = useState(true);

  const menuActions = { showMenu, setShowMenu };

  const bodyClass = clsx([styles.body_container], { [styles.body_pd]: showMenu });

  // if (!authenticated) return <Unauthorized />;

  return (
    <div className={bodyClass}>
      <Header menuActions={menuActions} styles={styles} />
      <Navbar showMenu={showMenu} />
      {children}
    </div>
  );
};

export default MainPage;
