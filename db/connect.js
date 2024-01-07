const mongoose = require("mongoose");

const connectDB = (uri) => {
    console.log("hi");
    return mongoose.connect(uri);
};

module.exports = connectDB;