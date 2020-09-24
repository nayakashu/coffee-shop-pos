import express from 'express';
import { getCoffeeListing } from './coffee/get-coffee-listing';
import { getShakesListing } from './shakes/get-shakes-listing';
import { getToppingsListing } from './toppings/get-toppings-listing';

const router = express.Router();

router.get('/coffee', getCoffeeListing);
router.get('/shakes', getShakesListing);
router.get('/toppings', getToppingsListing);

export default router;
