const paths = {
  home: '/',
  login: '/login',
  dashboard: '/dashboard',
  agent_settings: '/agent-settings',
  inventory_management: '/inventory-management',
  admin_settings: '/admin-settings',
  support: '/support',
};

export const publicPaths = [paths.login];
export const privatePaths = [
  paths.home,
  paths.dashboard,
  paths.agent_settings,
  paths.inventory_management,
  paths.admin_settings,
  paths.support,
];

export default paths;
