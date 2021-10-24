import connectDB from "./backend/config/db.js";
import userRoutes from "./backend/routes/userRoute.js";
import bookingRoutes from "./backend/routes/bookingRoute.js";
import doctorRoutes from "./backend/routes/doctorRoute.js";
import express from "express";

//connect database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/doctors", doctorRoutes);

const PORT = 5000;

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running on port ${PORT}`));
