import clsx from 'clsx';
import Header from '../Header';
import { useRouter } from 'next/router';
import Navbar from '@/components/layouts/Navbar';
import React, { useState, PropsWithChildren, useEffect } from 'react';
import styles from 'components/layouts/MainPage/Main.module.css';
// import { getAuthorizedPaths, validateSessionExpiration } from 'shared/utils/validations';
import Unauthorized from '@/components/Unauthorized';
import SessionExpired from '@/components/SessionExpired';
import { getAuthorizedPaths, validateSessionExpiration } from 'shared/utils/validations';

const MainPage = ({ children }: PropsWithChildren) => {
  const { pathname } = useRouter();
  const [authorizedPath, setauthorizedPath] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(true);

  useEffect(() => {
    setSessionExpired(validateSessionExpiration());
    setauthorizedPath(getAuthorizedPaths().includes(pathname));
  }, []);

  const [showMenu, setShowMenu] = useState(true);

  const menuActions = { showMenu, setShowMenu };

  const bodyClass = clsx([styles.body_container], { [styles.body_pd]: showMenu });

  return (
    <>
      {sessionExpired && <SessionExpired />}

      {!sessionExpired && (
        <div className={bodyClass}>
          <Header menuActions={menuActions} styles={styles} />
          <Navbar showMenu={showMenu} />
          {!authorizedPath ? <Unauthorized /> : children}
        </div>
      )}
    </>
  );
};

export default MainPage;
