const mongoose = require("mongoose");

module.exports = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://admin:pass@cluster0.zx6ptxj.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};