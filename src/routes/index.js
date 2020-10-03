import express from 'express';
import { getAddons } from './addons/get-addons';
import { getDrippedCoffees } from './dripped-coffees/get-dripped-coffees';
import { getLattes } from './lattes/get-lattes';
import { getSmoothies } from './smoothies/get-smoothies';

const router = express.Router();

router.get('/dripped-coffees', getDrippedCoffees);
router.get('/lattes', getLattes);
router.get('/smoothies', getSmoothies);
router.get('/addons', getAddons);

export default router;
