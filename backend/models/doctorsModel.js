import mongoose from "mongoose";

const doctorSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        speciality: {
            type: String,
            required: true,
        },
        degree: {
            type: String,
            required: true,
        },
        experience: {
            type: Number,
            required: true,
        },
        consultationFees: {
            type: Number,
            required: true,
        },
        imageUrl: String,
    },
    {
        timestamps: true,
    }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
