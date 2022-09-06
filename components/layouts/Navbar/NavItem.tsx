import clsx from 'clsx';
import { useRouter } from 'next/router';
import { NavbarItem } from 'shared/types/menu';
import { Accordion, useAccordionButton } from 'react-bootstrap';
import styles from 'components/layouts/Navbar/Navbar.module.css';
const { Collapse } = Accordion;

type NavbarItemProps = {
  itemData: NavbarItem;
  callback?: Function;
};

const NavbarItem = ({ itemData, callback }: NavbarItemProps) => {
  const router = useRouter();
  const { key, path, label, icon, children } = itemData;

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
      {hasChildren && (
        <Collapse eventKey={key}>
          <>
            {children?.map((itemData) => (
              <NavbarItem key={itemData.key} itemData={itemData} />
            ))}
          </>
        </Collapse>
      )}
    </>
  );
};

export default NavbarItem;
