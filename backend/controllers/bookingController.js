import Booking from "../models/bookingsModel.js";

export const isSlotAvailable = (req, res) => {
    Booking.findOne({
        doctor: req.params.id,
        date: req.query.date,
        slot_no: req.query.slot,
    })
        .then((booking) => res.status(200).json(booking))
        .catch((err) =>
            res.status(400).json({ message: "unknown error occurred" })
        );
};

export const addSlot = async (req, res) => {
    Booking.create({
        doctor: req.body.doctor,
        patient: req.body.patient,
        date: req.body.date,
        slot_no: req.body.slot,
    })
        .then((booking) => res.status(200).json(booking))
        .catch((err) =>
            res.status(400).json({ message: "unknown error occurred" })
        );
};

export const getBookingsByPatient = (req, res) => {
    Booking.find({
        patient: req.params.patientId,
    })
        .populate("doctor")
        .then((bookings) => res.status(200).json(bookings))
        .catch((err) =>
            res.status(400).json({ message: "unknown error occurred" })
        );
};

export const cancelBooking = (req, res) => {
    Booking.findByIdAndDelete(req.params.id)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json(err));
};