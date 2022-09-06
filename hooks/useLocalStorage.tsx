export const useLocalStorage = (key: string) => {
  const getLocalStorageData = () => {
    const storage = localStorage?.getItem(key);
    const storageData = storage && JSON.parse(storage);
    return storageData;
  };

  const saveLocalStorageData = (data: Object) => {
    return localStorage?.setItem(key, JSON.stringify(data));
  };

  const removeLocalStorageData = () => localStorage?.removeItem(key);

  return { getLocalStorageData, saveLocalStorageData, removeLocalStorageData };
};
