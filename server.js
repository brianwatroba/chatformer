const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 4000;

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// app.post('/', function (req, res) {
// 	res.sendFile(__dirname + '/index.html');
// });

app.post("/connect", async (req, res) => {
    console.log(req.body);
    res.status(200);

    // axios.defaults.headers.common["Client-ID"] = process.env.TWITCH_CLIENT_ID;
    // axios
    //     .get(`https://api.twitch.tv/helix/channels?broadcaster_id=${req.body}`)
    //     .then((response) => {
    //         console.log(response.data);

    //         console.log(response.data.length);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
});

app.get("/connect", async (req, res) => {
    res.send("Worked");
});
