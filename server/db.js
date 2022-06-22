const mongoose = require("mongoose");

const USER = "Enter your Mongodb username"
const PASS = "Enter your Mongodb password"
module.exports = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://{USER}:{PASS}@cluster0.zx6ptxj.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};