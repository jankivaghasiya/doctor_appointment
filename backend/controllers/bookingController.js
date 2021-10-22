import Booking from "../models/bookingsModel.js";

const getCurrentTime = () => {
    let current = new Date();
    let current_time = current.toLocaleTimeString("it-IT", {
        hour: "numeric",
    });
    return current_time;
};

const ddMmYyyy = (today) => {
    let dd = today.getDate();
    let mm = today.getMonth() + 1;

    let yyyy = today.getFullYear();

    let ans = "";
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    ans = dd + "-" + mm + "-" + yyyy;
    return ans;
};

const getMillisecondsFromDate = (date) => {
    var parts = date.split("-");
    var date = new Date(parts[1] + "-" + parts[0] + "-" + parts[2]);
    return date.getTime();
}

const compareDates = (date1, date2) => {
    return getMillisecondsFromDate(date1) < getMillisecondsFromDate(date2);
}

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
        .then((data) => {
            const current_date = ddMmYyyy(new Date()); 
            const time = [9, 10, 11, 12, 16, 17, 18, 19];
            let bookings = [];
            bookings = data.filter((b) => {
                if (compareDates(current_date, b.date) || (b.date === current_date && time[b.slot_no] > getCurrentTime())) {
                    return true;
                }
                return false;
            })
            res.status(200).json(bookings)
        })
        .catch((err) =>
            res.status(400).json({ message: "unknown error occurred" })
        );
};

export const cancelBooking = (req, res) => {
    Booking.findByIdAndDelete(req.params.id)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json(err));
};