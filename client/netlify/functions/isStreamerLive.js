const axios = require("axios");

exports.handler = async function (event, context) {
    const apiKey = process.env.TWITCH_API_TOKEN;
    const clientId = process.env.TWITCH_CLIENT_ID;

    console.log("apikey", apiKey);
    console.log(typeof clientId);
    const config = {
        headers: {
            Client-Id: clientId,
            
        }
    }
    axios.get("https://api.twitch.tv/helix/streams");

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" }),
    };
};
