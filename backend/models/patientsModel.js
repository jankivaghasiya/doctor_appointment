import mongoose from "mongoose";
import "mongoose-type-email";
mongoose.SchemaTypes.Email.defaults.message = "Email address is invalid";

const patientSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            required: true,
        },
        contact: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
