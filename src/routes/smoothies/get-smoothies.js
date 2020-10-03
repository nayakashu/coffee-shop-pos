import smoothiesList from './smoothies-list.json';

export const getSmoothies = async (_, res) => res.json(smoothiesList);
