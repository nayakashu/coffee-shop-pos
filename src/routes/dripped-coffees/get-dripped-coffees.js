import drippedCoffeeList from './dripped-coffee-list.json';

export const getDrippedCoffees = async (_, res) => res.json(drippedCoffeeList);
