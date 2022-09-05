export const useCookies = () => {
  const saveCookie = (name: string, value: string, expires: Date) => {
    document.cookie = `${name}=${value} expires=${expires}`;
  };

  const getCookie = (name: string) => {
    console.log(document.cookie);
  };

  return { saveCookie, getCookie };
};
