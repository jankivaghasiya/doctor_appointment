import Booking from "../models/bookingsModel.js";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

export const isSlotAvailable = asyncHandler(async (req, res) => {
  // Booking.findOne(
  //   {
  //     doctor: mongoose.Types.ObjectId(req.params.id),
  //     date: req.query.date,
  //     slot_no: req.query.slot,
  //   },
  //   (err, data) => {
  //     if (err) {
  //       res.status(400).json(err);
  //       console.log("errrrrrrrrrrrrrrrrrr");
  //       return;
  //     }
  //     res.json(data);
  //     console.log("howwwwww");
  //   }
  // );

  const booking = await Booking.findOne({
    doctor: mongoose.Types.ObjectId(req.params.id),
    date: req.query.date,
    slot_no: req.query.slot,
  }).exec();
  res.json(booking);
});

export const addSlot = asyncHandler(async (req, res) => {
  Booking.create(
    {
      doctor: mongoose.Types.ObjectId(req.params.id),
      patient: mongoose.Types.ObjectId(req.params.patientId),
      date: req.query.date,
      slot_no: req.query.slot,
    },
    (err, result) => {
      if (err) res.status(400).json(err.message);
      else res.json(result);
    }
  );
});
