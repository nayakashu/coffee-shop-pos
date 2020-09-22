import express from 'express';
import { getCoffeeListing } from './coffee/get-coffee-listing';
import { getShakesListing } from './shakes/get-shakes-listing';

const router = express.Router();

router.get('/coffee', getCoffeeListing);
router.get('/shakes', getShakesListing);

export default router;
