const loadEnv = require("./loadEnv");
loadEnv();

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI_PROD,
};
