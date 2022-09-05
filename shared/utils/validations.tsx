import { useSessionStorage } from 'hooks/useSessionStorage';
import { USER_KEY_LOCAL_STORAGE } from 'shared/constants/const';
import { User } from 'shared/types/user';

const CREATE = 'create';
const ADD = 'add';
const EDIT = 'edit';
const REMOVE = 'remove';

export const validateSessionExpiration = (): boolean => {
  const { getSessionStorageData } = useSessionStorage(USER_KEY_LOCAL_STORAGE);
  const user = getSessionStorageData() as User;
  return !user?.token;
};

export const getAuthorizedPaths = (): string[] => {
  const { getSessionStorageData } = useSessionStorage(USER_KEY_LOCAL_STORAGE);
  const user = getSessionStorageData() as User;
  const authorizedUserRoutes = user?.profile?.modules?.map((module) => module.path);
  return authorizedUserRoutes || [];
};
