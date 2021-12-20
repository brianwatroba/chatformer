const dotenv = require("dotenv");

const loadEnv = () => {
    if (process.env.NODE_ENV !== "development") return;
    const result = dotenv.config();
    if (result.error) {
        throw result.error;
    }
    console.log("env variables loaded successfully");
};

module.exports = loadEnv;
