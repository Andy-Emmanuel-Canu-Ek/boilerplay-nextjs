import routes from 'shared/constants/paths';

export type Profile = {
  id: number;
  nombre: string;
  key: string;
  descripcion?: string;
  estatus: boolean;
  modules: Modules[];
};

export type Modules = {
  id: number;
  path: string;
  nombre_modulo: string;
  descripcion?: string;
  estatus: string;
  permissions: Permission[];
};

export type Permission = {
  id: number;
};
