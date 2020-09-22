import shakesListingData from './shakes-listing.json';

export const getShakesListing = async (_, res) => res.json(shakesListingData);
