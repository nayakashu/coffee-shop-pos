import { httpGet } from './http';

export const getListing = async (url) => {
  const result = await httpGet(url);

  return result;
};
