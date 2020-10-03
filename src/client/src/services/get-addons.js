import { httpGet } from './http';

export const getAddons = async (url, params) => {
  const result = await httpGet(url, null, null, params);

  return result;
};
