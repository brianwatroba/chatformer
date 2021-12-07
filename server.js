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

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

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
