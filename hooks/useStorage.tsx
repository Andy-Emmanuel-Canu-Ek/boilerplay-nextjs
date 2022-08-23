export const useStorage = (key: string) => {
  const getStorageData = () => {
    const storage = localStorage?.getItem(key);
    const storageData = storage && JSON.parse(storage);
    return storageData;
  };

  const saveStorageData = (data: Object) => localStorage?.setItem(key, JSON.stringify(data));

  return { getStorageData, saveStorageData };
};
