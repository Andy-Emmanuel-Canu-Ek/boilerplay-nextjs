import React from 'react';
import clsx from 'clsx';
import { BiLogOut } from 'react-icons/bi';
import Image from 'next/image';
import menuSidebarItems from 'shared/constants/menu';
import { useRouter } from 'next/router';
import { MACROPAY_LOGO } from 'shared/constants/const';

type NavbarProps = {
  showMenu: boolean;
};

const Navbar = ({ showMenu }: NavbarProps) => {
  const router = useRouter();
  const navbarClass = clsx('l-navbar', { show: showMenu });
  const onChangePath = (routePath: string) => router.push(routePath);

  return (
    <div className={navbarClass} id="nav-bar">
      <nav className="nav">
        <div>
          <a href="#" className="nav_logo">
            <Image src={MACROPAY_LOGO} height={50} width={50} /> <span className="nav_logo-name">Macropay</span>
          </a>
          <div className="nav_list">
            {menuSidebarItems.map(({ key, route, label, icon }) => {
              const itemClass = clsx('nav_link', { active: route === router.pathname });

              return (
                <a
                  key={key}
                  className={itemClass}
                  onClick={() => {
                    onChangePath(route);
                  }}
                >
                  {icon} <span className="nav_name">{label}</span>
                </a>
              );
            })}
          </div>
        </div>
        <a href="#" className="nav_link">
          <BiLogOut className="nav_icon" /> <span className="nav_name">SignOut</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
