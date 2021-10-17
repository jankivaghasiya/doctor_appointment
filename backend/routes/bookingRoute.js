import { addSlot, isSlotAvailable } from "../controllers/bookingController.js";
import express from 'express';
const router = express.Router();

router.route('/:id').get(isSlotAvailable);
router.route('/').post(addSlot);

export default router;