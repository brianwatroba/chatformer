const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const axiosConfig = {
    headers: {
        Authorization: `Bearer ${process.env.TWITCH_API_TOKEN}`,
        "Client-Id": process.env.TWITCH_CLIENT_ID,
    },
};

// @route  GET api/twitch/streams
// @desc   get info about a Twitch stream
// @access public

router.get("/", async (req, res) => {
    const baseUrl = "https://api.twitch.tv/helix/streams?first=1&user_login=";
    const username = req.query.user;

    if (username) {
        try {
            const twitchResponse = await axios.get(
                baseUrl + username,
                axiosConfig
            );

            const user = twitchResponse.data.data[0];

            if (user) {
                res.status(200).json(user);
            } else {
                console.log("getting to else");
                res.status(404).send("Twitch user does not exist");
            }
        } catch (error) {
            console.log(error);
            res.status(500).send("Server error");
        }
    } else {
        res.status(400).send("Twitch username not specified");
    }
});

module.exports = router;
