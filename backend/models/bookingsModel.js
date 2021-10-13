import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    patient: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
    },
    date: String,
    slot_no: Number,
  },

  { timestamps: true }
);

bookingSchema.index({ doctor: 1, date: 1, slot_no: 1 }, { unique: true });
const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
