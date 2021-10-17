import {
    getUsers,
    getUserById,
    addUser,
    doesExist,
} from "../controllers/userController.js";
import express from "express";
const router = express.Router();

// express router method to create route for getting all users
router.route("/").get(getUsers);

// express router method to create route for getting users by id
router.route("/login").post(doesExist);
router.route("/add").post(addUser);
router.route("/:id").get(getUserById);

export default router;
