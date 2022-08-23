export const divisionArray = (size: number): number[] => [...Array(size).keys()];

export const getUserToken = (user: string, pass: string) => {
  const token = `${user}:${pass}`;
  return Buffer.from(token).toString('base64');
};

export const isValidUrl = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
