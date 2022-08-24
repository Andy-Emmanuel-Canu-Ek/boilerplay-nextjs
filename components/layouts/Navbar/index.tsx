import React from 'react';
import clsx from 'clsx';
import { BiLogOut } from 'react-icons/bi';
import Image from 'next/image';
import menuSidebarItems from 'shared/constants/menu';
import { useRouter } from 'next/router';
import { MACROPAY_LOGO } from 'shared/constants/const';
import Link from 'next/link';
import styles from 'components/layouts/Navbar/Navbar.module.css';

type NavbarProps = {
  showMenu: boolean;
};

const Navbar = ({ showMenu }: NavbarProps) => {
  const { asPath } = useRouter();
  const navbarClass = clsx(styles.l_navbar, { [styles.show]: showMenu });

  return (
    <div className={navbarClass}>
      <nav className={styles.nav}>
        <div>
          <a href="#" className={styles.nav_logo}>
            <Image src={MACROPAY_LOGO} height={50} width={50} /> <span className={styles.nav_logo_name}>Macropay</span>
          </a>
          <div>
            {menuSidebarItems.map(({ key, route, label, icon }) => {
              const itemClass = clsx(styles.nav_link, { [styles.active]: route === asPath });

              return (
                <Link key={key} href={route}>
                  <a className={itemClass}>
                    {icon} <span className={styles.nav_name}>{label}</span>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <a href="#" className={styles.nav_link}>
          <BiLogOut className={styles.nav_icon} /> <span className={styles.nav_name}>SignOut</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
