import lattesList from './lattes-list.json';

export const getLattes = async (_, res) => res.json(lattesList);
