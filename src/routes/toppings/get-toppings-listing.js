import toppingsListingData from './toppings-listing.json';

export const getToppingsListing = async (_, res) =>
  res.json(toppingsListingData);
