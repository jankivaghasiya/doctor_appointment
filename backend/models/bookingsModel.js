import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
    {
        doctor: {
            type: Schema.Types.ObjectId,
            ref: "Doctor",
            required: true,
        },
        patient: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        slot_no: {
            type: Number,
            required: true,
            min: [0, "invalid slot"],
            max: [7, "invalid slot"],
        },
    },

    { timestamps: true }
);

bookingSchema.index({ doctor: 1, date: 1, slot_no: 1 }, { unique: true });
const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
