const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const axiosConfig = {
    headers: {
        Authorization: `Bearer ${process.env.TWITCH_API_TOKEN}`,
        "Client-Id": process.env.TWITCH_CLIENT_ID,
    },
};

// @route  POST api/twitch/auth
// @desc   get Twitch user token after client Twitch login, call Twitch API to get info about that user, then return info to client
// @access public

router.post("/", async (req, res) => {
    const code = req.body.code;
    const clientUrl = req.headers.origin;

    if (!code) res.status(400).send("No auth code provided");

    const baseUrl = "https://id.twitch.tv/oauth2/token";
    const clientIdParam = `?client_id=${process.env.TWITCH_CLIENT_ID}`;
    const clientSecretParam = `&client_secret=${process.env.TWITCH_CLIENT_SECRET}`;
    const codeParam = `&code=${code}`;
    const grantType = `&grant_type=authorization_code`;
    const redirectUri = `&redirect_uri=${clientUrl}/auth`;

    try {
        const twitchResponse = await axios.post(
            baseUrl +
                clientIdParam +
                clientSecretParam +
                codeParam +
                grantType +
                redirectUri
        );

        const token = twitchResponse.data.access_token;

        const user = await axios.get(`https://api.twitch.tv/helix/users?`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Client-Id": process.env.TWITCH_CLIENT_ID,
            },
        });

        const userData = user.data.data[0];
        res.json(userData);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
});

module.exports = router;
