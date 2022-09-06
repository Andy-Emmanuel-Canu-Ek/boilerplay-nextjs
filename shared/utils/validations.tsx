import { User } from 'shared/types/user';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { USER_KEY_LOCAL_STORAGE } from 'shared/constants/key_storages';

const CREATE = 'create';
const ADD = 'add';
const EDIT = 'edit';
const REMOVE = 'remove';

export const getAuthorizedPaths = (): string[] => {
  const { getLocalStorageData } = useLocalStorage(USER_KEY_LOCAL_STORAGE);
  const user = getLocalStorageData() as User;
  const authorizedUserRoutes = user?.profile?.modules?.map((module) => module.path);
  return authorizedUserRoutes || [];
};
