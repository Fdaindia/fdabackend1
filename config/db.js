const mongoose = require("mongoose");
const { connect } = require("../routes/userRoutes");
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};

module.exports = connectDB;
