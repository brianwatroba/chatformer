const config = require("config");
const TWITCH_API_TOKEN = config.get("TWITCH_API_TOKEN");
const TWITCH_CLIENT_ID = config.get("TWITCH_CLIENT_ID");

const twitchHeaders = {
    headers: {
        Authorization: `Bearer ${TWITCH_API_TOKEN}`,
        "Client-Id": TWITCH_CLIENT_ID,
    },
};
module.exports = twitchHeaders;
