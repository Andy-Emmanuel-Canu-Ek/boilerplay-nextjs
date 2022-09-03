import routes from 'shared/constants/paths';
import { BiBarChart, BiClipboard, BiCog, BiGroup, BiSupport } from 'react-icons/bi';
import { NavbarItem } from 'shared/types/menu';

const menuSidebarItems: NavbarItem[] = [
  {
    key: 'agent_settings',
    label: 'Configuraciones',
    path: '',
    icon: <BiBarChart className="nav_icon" />,
    children: [
      {
        key: 'agent_settings_chart',
        label: 'Configuraciones de agente',
        path: routes.agent_settings,
        icon: <BiClipboard className="nav_icon" />,
      },
    ],
  },
  {
    key: 'inventory_management',
    label: 'Gestión de inventarios',
    path: routes.inventory_management,
    icon: <BiCog className="nav_icon" />,
  },
  {
    key: 'admin_settings',
    label: 'Administradores',
    path: routes.admin_settings,
    icon: <BiGroup className="nav_icon" />,
  },
  {
    key: 'support',
    label: 'Apoyo',
    path: routes.support,
    icon: <BiSupport className="nav_icon" />,
  },
];

export default menuSidebarItems;
