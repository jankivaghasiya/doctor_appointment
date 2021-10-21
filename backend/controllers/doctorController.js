import Doctor from "../models/doctorsModel.js";

export const getDoctorById = (req, res) => {
    Doctor.findById(req.params.id)
        .then((data) => res.status(200).json(data))
        .catch((err) => {
            const error = { message: "invalid id" };
            res.status(400).json(error);
        });
};
