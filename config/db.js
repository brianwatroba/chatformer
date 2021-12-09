const mongoose = require("mongoose");

const connectDB = async () => {
    console.log();
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected...");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
