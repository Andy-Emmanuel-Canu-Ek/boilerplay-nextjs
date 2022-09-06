export const useCookies = (name: string) => {
  const saveCookie = (value: string, expires: Date) => {
    document.cookie = `${name}=${value} expires=${expires}`;
  };

  const removeCookie = () => {
    document.cookie = `${name}=; expires=${new Date()}`;
  };

  return { saveCookie, removeCookie };
};
