import { httpGet } from './http';

export const getToppings = async (url) => {
  const result = await httpGet(url);

  return result;
};
