import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookingSchema =new Schema(
    {
      doctor: {
        type: Schema.Types.ObjectId,
        ref: 'doctorModel',
        required: true
      },
      patient: {
        type: Schema.Types.ObjectId,
        ref: 'patientModel',
        required: true
      },
      slot_time: {
        type : Date,
        required: true
      }
    },

    { timestamps: true }
  );
  

const Booking = mongoose.model('Booking', bookingSchema)

export default Booking;


