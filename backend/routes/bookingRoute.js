import { isSlotAvailable } from "../controllers/bookingController.js";
import express from 'express';
const router = express.Router();

router.route('/:id').get(isSlotAvailable);

export default router;