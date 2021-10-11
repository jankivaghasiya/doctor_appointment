import Booking from "../models/bookingsModel.js";
import asyncHandler from "express-async-handler";
import { json } from "express";
import mongoose from "mongoose";

export const isSlotAvailable = asyncHandler(async (req, res) => {
  Booking.findOne(
    {
      doctor: mongoose.Types.ObjectId(req.params.id),
      date: req.query.date,
      slot_no: req.query.slot,
    },
    (err, data) => {
      if (err) {
        return;
      }
      res.json(data);
    }
  );
});