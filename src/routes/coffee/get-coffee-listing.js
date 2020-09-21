import coffeeListingData from './coffee-listing.json';

export const getCoffeeListing = async (_, res) => res.json(coffeeListingData);
