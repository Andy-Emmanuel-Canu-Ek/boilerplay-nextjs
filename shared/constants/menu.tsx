import paths from 'shared/constants/paths';
import { NavbarItem } from 'shared/types/menu';
import { BiBarChart, BiClipboard, BiCog, BiGroup, BiSupport, BiTable } from 'react-icons/bi';

const menuSidebarItems: NavbarItem[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: paths.dashboard,
    icon: <BiTable className="nav_icon" />,
  },
  {
    key: 'agent_settings',
    label: 'Configuraciones',
    path: paths.agent_settings,
    icon: <BiBarChart className="nav_icon" />,
    children: [
      {
        key: 'agent_settings_chart',
        label: 'Configuraciones de agente',
        path: paths.agent_settings,
        icon: <BiClipboard className="nav_icon" />,
      },
    ],
  },
  {
    key: 'inventory_management',
    label: 'Gestión de inventarios',
    path: paths.inventory_management,
    icon: <BiCog className="nav_icon" />,
  },
  {
    key: 'admin_settings',
    label: 'Administradores',
    path: paths.admin_settings,
    icon: <BiGroup className="nav_icon" />,
  },
  {
    key: 'support',
    label: 'Apoyo',
    path: paths.support,
    icon: <BiSupport className="nav_icon" />,
  },
];

export default menuSidebarItems;
