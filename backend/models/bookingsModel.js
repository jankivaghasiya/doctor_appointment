import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookingSchema =new Schema(
    {
      doctor: {
        type: Schema.Types.ObjectId,
        ref: 'doctorModel',
      },
      patient: {
        type: Schema.Types.ObjectId,
        ref: 'patientModel',
      },
      date: String,
      slot_no: Number,
    },

    { timestamps: true }
  );
  

const Booking = mongoose.model('Booking', bookingSchema)

export default Booking


