const loadEnv = require("./loadEnv");
loadEnv();

module.exports = {
    TWITCH_API_TOKEN: process.env.TWITCH_API_TOKEN,
    TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
    TWITCH_CLIENT_SECRET: process.env.TWITCH_CLIENT_SECRET,
};
