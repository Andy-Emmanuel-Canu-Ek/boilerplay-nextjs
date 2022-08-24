import clsx from 'clsx';
import menuSidebarItems from 'shared/constants/menu';
import { useRouter } from 'next/router';
import React from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

type HeaderProps = {
  menuActions: any;
  styles: any;
};

const Header = ({ menuActions, styles }: HeaderProps) => {
  const router = useRouter();
  const { showMenu, setShowMenu } = menuActions;
  const onShowMenu = () => setShowMenu(true);
  const onCloseMenu = () => setShowMenu(false);

  const headerClass = clsx(styles.header, { [styles.body_pd]: showMenu });
  const sectionName = menuSidebarItems.find(({ route }) => route === router.pathname)?.label ?? '';

  return (
    <header className={headerClass}>
      <div className={styles.header_toggle}>
        {showMenu ? /*<BiX onClick={onCloseMenu} />*/ <label>{sectionName}</label> : <BiMenu onClick={onShowMenu} />}
      </div>
      <div className={styles.header_img}>
        <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
      </div>
    </header>
  );
};

export default Header;
