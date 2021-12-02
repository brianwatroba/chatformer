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
});

app.get("/connect", async (req, res) => {
    res.send("Worked");
});

app.get("/", (req, res) => {
    res.redirect("https://www.google.com");
});
