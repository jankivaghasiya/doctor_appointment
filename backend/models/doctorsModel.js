import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true
    },
    consultationFees: {
        type: Number,
        required: true,
    },
}, 
{
    timestamps: true
})

const Doctor = mongoose.model('doctor', doctorSchema)

export default Doctor;