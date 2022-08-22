import clsx from 'clsx';
import { menuSidebarItems } from 'consts/menu';
import { useRouter } from 'next/router';
import React from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

type HeaderProps = {
  menuActions: any;
};

const Header = ({ menuActions }: HeaderProps) => {
  const router = useRouter();
  const { showMenu, setShowMenu } = menuActions;
  const onShowMenu = () => setShowMenu(true);
  const onCloseMenu = () => setShowMenu(false);

  const headerClass = clsx('header', { 'body-pd': showMenu });
  const sectionName = menuSidebarItems.find(({ route }) => route === router.pathname)?.label ?? '';

  return (
    <header className={headerClass} id="header">
      <div className="header_toggle">
        {showMenu ? /*<BiX onClick={onCloseMenu} />*/ <label>{sectionName}</label> : <BiMenu onClick={onShowMenu} />}
      </div>
      <div className="header_img">
        <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
      </div>
    </header>
  );
};

export default Header;
