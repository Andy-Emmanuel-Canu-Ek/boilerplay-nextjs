export const useSessionStorage = (key: string) => {
  const getSessionStorageData = () => {
    const storage = sessionStorage?.getItem(key);
    const storageData = storage && JSON.parse(storage);
    return storageData;
  };

  const saveSessionStorageData = (data: Object) => {
    return sessionStorage?.setItem(key, JSON.stringify(data));
  };

  return { getSessionStorageData, saveSessionStorageData };
};
