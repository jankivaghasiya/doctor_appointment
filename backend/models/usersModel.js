import mongoose from 'mongoose'

const validator = require('mongoose-validator')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    secondName:{
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique:true,
        validate: [
            validator({
              validator: 'isEmail',
              message: 'Oops..please enter valid email'
            })
          ]
    },
    password: {
        type: String,
        required: true,

    },
    city: String,
    
    gender: {
        type: String, enum: ["Male", "Female"]
    }


}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User