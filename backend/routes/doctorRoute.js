import express from "express";
import { getDoctorById } from "../controllers/doctorController.js";
const router = express.Router();

router.route("/:id").get(getDoctorById);

export default router;
