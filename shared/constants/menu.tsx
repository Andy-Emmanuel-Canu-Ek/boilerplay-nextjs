import routes from 'shared/constants/routes';
import { BiClipboard, BiCog, BiGroup, BiSupport } from 'react-icons/bi';

const menuSidebarItems = [
  {
    key: 'agent_settings',
    label: 'Configuraciones',
    route: routes.agent_settings,
    icon: <BiCog className="nav_icon" />,
  },
  {
    key: 'inventory_management',
    label: 'Gestión de inventarios',
    route: routes.inventory_management,
    icon: <BiClipboard className="nav_icon" />,
  },
  {
    key: 'admin_settings',
    label: 'Administradores',
    route: routes.admin_settings,
    icon: <BiGroup className="nav_icon" />,
  },
  {
    key: 'support',
    label: 'Apoyo',
    route: routes.support,
    icon: <BiSupport className="nav_icon" />,
  },
];

export default menuSidebarItems;
