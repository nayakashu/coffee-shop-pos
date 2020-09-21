import express from 'express';
import { getCoffeeListing } from './coffee/get-coffee-listing';

const router = express.Router();

router.get('/coffee', getCoffeeListing);

export default router;
