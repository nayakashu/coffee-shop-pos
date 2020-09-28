import { httpGet } from './http';

export const getAddOns = async (url) => {
  const result = await httpGet(url);

  return result;
};
