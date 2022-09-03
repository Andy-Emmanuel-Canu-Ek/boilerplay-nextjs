import React, { EventHandler, useContext } from 'react';
import clsx from 'clsx';
import { BiLogOut } from 'react-icons/bi';
import Image from 'next/image';
import menuSidebarItems from 'shared/constants/menu';
import { useRouter } from 'next/router';
import { MACROPAY_LOGO } from 'shared/constants/const';
import Link from 'next/link';
import styles from 'components/layouts/Navbar/Navbar.module.css';
import { Accordion, AccordionContext, useAccordionButton } from 'react-bootstrap';
import { NavbarItem } from 'shared/types/menu';
import { getAuthorizedPaths } from 'shared/utils/validations';
const { Item, Collapse } = Accordion;

interface NavbarItemProps {
  itemData: NavbarItem;
  callback?: Function;
}

const NavbarItem = ({ itemData, callback }: NavbarItemProps) => {
  const router = useRouter();
  const { activeEventKey } = useContext(AccordionContext);
  const { key, path, label, icon, children } = itemData;

  const isCurrentEventKey = activeEventKey === key;

  const openCollapse = useAccordionButton(key, () => callback && callback());
  const changeRoute = () => router.push(path);

  const itemClass = clsx(styles.nav_link, { [styles.active]: path === router.asPath });
  const hasChildren = children && children.length > 0;

  const ItemLabel = () => (
    <a className={itemClass} onClick={hasChildren ? openCollapse : changeRoute}>
      {icon}
      <span className={styles.nav_name}>{label}</span>
    </a>
  );

  return (
    <>
      <ItemLabel />
      <Collapse eventKey={key}>
        <>
          {children?.map((itemData) => (
            <NavbarItem key={itemData.key} itemData={itemData} />
          ))}
        </>
      </Collapse>
    </>
  );
};

type NavbarProps = {
  showMenu: boolean;
};

const Navbar = ({ showMenu }: NavbarProps) => {
  const navbarClass = clsx(styles.l_navbar, { [styles.show]: showMenu });

  return (
    <div className={navbarClass}>
      <nav className={styles.nav}>
        <div>
          <a href="#" className={styles.nav_logo}>
            <Image src={MACROPAY_LOGO} height={50} width={50} /> <span className={styles.nav_logo_name}>Macropay</span>
          </a>
          <div>
            <Accordion defaultActiveKey="0">
              {menuSidebarItems.map((itemData) =>
                // getAuthorizedPaths().includes(itemData.path) ? (
                  <NavbarItem key={itemData.key} itemData={itemData} />
                // ) : (
                //   <></>
                // )
              )}
            </Accordion>
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
