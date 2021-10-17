import mongoose from "mongoose";
import "mongoose-type-email";

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
            unique: true,
            minlength: [6, "username should be atleast 6 characters long"],
            maxlength: [10, "username cannot be more than 10 characters"],
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;
