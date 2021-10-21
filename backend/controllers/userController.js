import User from "../models/usersModel.js";

const handleError = (err) => {
    let error = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
    };

    if (err.code === 11000) {
        if (err.keyValue.userName) error.userName = "username already taken";
        else error.email = "email already exists";
    }

    if (err._message === "User validation failed") {
        const { errors } = err;
        if (errors.firstName)
            error.firstName = errors.firstName.properties.message;
        if (err.errors.lastName)
            error.lastName = errors.lastName.properties.message;
        if (err.errors.userName)
            error.userName = errors.userName.properties.message;
        if (err.errors.email) error.email = errors.email.properties.message;
        if (err.errors.password)
            error.password = errors.password.properties.message;
    }

    return error;
};

//getUsers function to get all users
export const getUsers = async (req, res) => {
    const users = await User.find({});
    res.json(users);
};

//getUserById function to retrieve user by id
export const getUserById = (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).json({ message: "invalid id" }));
};

export const addUser = (req, res) => {
    User.create({
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email,
        userName: req.body.uName,
        password: req.body.password,
    })
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).json(handleError(err)));
};

export const doesExist = (req, res) => {
    User.findOne({
        email: req.body.email,
        password: req.body.password,
    })
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            res.status(400).json({ message: "unknown error occurred" });
        });
};
