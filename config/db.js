const config = require("config");
const mongoose = require("mongoose");
const mongoUri = config.get("MONGO_URI");

const connectDB = async () => {
    try {
        const database = await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const dbName = database.connections[0].name;
        console.log(`${dbName} database connected...`);
    } catch (err) {
        console.error(err);
        // process.exit(1);
    }
};

module.exports = connectDB;
