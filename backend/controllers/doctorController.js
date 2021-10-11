import Doctor from "../models/doctorsModel.js";
import asyncHandler from "express-async-handler";

export const getDoctorById = asyncHandler(async (req, res) => {
  Doctor.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return;
    res.json(data);
  });
});