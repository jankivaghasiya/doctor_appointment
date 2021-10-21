import {
    addSlot,
    getBookingsByPatient,
    isSlotAvailable,
    cancelBooking,
} from "../controllers/bookingController.js";
import express from "express";
const router = express.Router();

router.route("/cancel/:id").delete(cancelBooking);
router.route("/:id").get(isSlotAvailable);
router.route("/get/:patientId").get(getBookingsByPatient);
router.route("/").post(addSlot);

export default router;
