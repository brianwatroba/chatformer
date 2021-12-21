const dotenv = require("dotenv");

const loadEnv = (envStr) => {
    if (
        process.env.NODE_ENV === "staging" ||
        process.env.NODE_ENV === "production"
    )
        return;
    const result = dotenv.config();
    if (result.error) {
        throw result.error;
    }
    console.log(`${envStr} env variables loaded`);
};

module.exports = loadEnv;
