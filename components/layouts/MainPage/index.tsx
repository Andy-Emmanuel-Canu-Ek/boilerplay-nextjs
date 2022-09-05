import clsx from 'clsx';
import Header from '../Header';
import { useRouter } from 'next/router';
import Navbar from '@/components/layouts/Navbar';
import Unauthorized from '@/components/Unauthorized';
import { getAuthorizedPaths } from 'shared/utils/validations';
import styles from 'components/layouts/MainPage/Main.module.css';
import React, { useState, PropsWithChildren, useEffect } from 'react';

const MainPage = ({ children }: PropsWithChildren) => {
  const { pathname } = useRouter();
  const [authorizedPath, setAuthorizedPath] = useState(false);

  useEffect(() => {
    setAuthorizedPath(getAuthorizedPaths().includes(pathname));
  }, []);

  const [showMenu, setShowMenu] = useState(true);

  const menuActions = { showMenu, setShowMenu };

  const bodyClass = clsx([styles.body_container], { [styles.body_pd]: showMenu });

  return (
    <>
      <div className={bodyClass}>
        <Header menuActions={menuActions} styles={styles} />
        <Navbar showMenu={showMenu} />
        {!authorizedPath ? <Unauthorized /> : children}
      </div>
    </>
  );
};

export default MainPage;
