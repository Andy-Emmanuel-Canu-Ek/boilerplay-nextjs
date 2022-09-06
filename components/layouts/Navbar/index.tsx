import clsx from 'clsx';
import Image from 'next/image';
import NavbarItem from './NavItem';
import { BiLogOut } from 'react-icons/bi';
import { Accordion } from 'react-bootstrap';
import { useCookies } from 'hooks/useCookies';
import React, { useEffect, useState } from 'react';
import menuSidebarItems from 'shared/constants/menu';
import { MACROPAY_LOGO } from 'shared/constants/const';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { getAuthorizedPaths } from 'shared/utils/validations';
import styles from 'components/layouts/Navbar/Navbar.module.css';
import { SESSION_TOKEN, USER_KEY_LOCAL_STORAGE } from 'shared/constants/key_storages';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import paths from 'shared/constants/paths';

type NavbarProps = {
  showMenu: boolean;
};

const Navbar = ({ showMenu }: NavbarProps) => {
  const router = useRouter();
  const navbarClass = clsx(styles.l_navbar, { [styles.show]: showMenu });
  const [authorizedPaths, setAuthorizedPaths] = useState<string[]>([]);
  const { removeCookie: removeSessionToken } = useCookies(SESSION_TOKEN);
  const { removeLocalStorageData: removeUserLocalStorageData } = useLocalStorage(USER_KEY_LOCAL_STORAGE);

  useEffect(() => {
    setAuthorizedPaths(getAuthorizedPaths());
  }, []);

  const onCloseSession = () => {
    Swal.fire({
      title: 'Cerrar sessión',
      text: '¿Esta seguro de que quiere cerrar su sessión?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si, estoy seguro',
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        closeSession();
      }
    });
  };

  const closeSession = () => {
    removeSessionToken();
    removeUserLocalStorageData();
    router.replace(paths.login);
  };

  const menuItems = menuSidebarItems.filter((item) => authorizedPaths.includes(item.path));

  return (
    <div className={navbarClass}>
      <nav className={styles.nav}>
        <div>
          <a href="#" className={styles.nav_logo}>
            <Image src={MACROPAY_LOGO} height={50} width={50} /> <span className={styles.nav_logo_name}>Macropay</span>
          </a>
          <div>
            <Accordion defaultActiveKey="0">
              {menuItems.map((itemData) => (
                <NavbarItem key={itemData.key} itemData={itemData} />
              ))}
            </Accordion>
          </div>
        </div>
        <a className={styles.nav_link} onClick={onCloseSession}>
          <BiLogOut className={styles.nav_icon} /> <span className={styles.nav_name}>SignOut</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
