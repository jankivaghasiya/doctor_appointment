import mongoose from "mongoose";
require('mongoose-type-email');

const userSchema = mongoose.Schema({
    firstName: {
      type: String,
      reqired: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },  
    gender: {
        type: String, 
        enum: ["Male", "Female"],
        required: true,
    }
}, 
{
    timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User;