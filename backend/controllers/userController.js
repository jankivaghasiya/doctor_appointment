import User from "../models/usersModel.js";
import asyncHandler from "express-async-handler";

//getUsers function to get all users
export const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

//getUserById function to retrieve user by id
export const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    //if user id match param id send user else throw error
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
        res.status(404);
        throw new Error("User not found");
    }
});

export const addUser = asyncHandler(async (req, res) => {
    const result = await User.create({
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email,
        password: req.body.password,
    });
    res.json({ message: "user added successfully" });
});
