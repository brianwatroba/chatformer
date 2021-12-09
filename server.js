const loadEnv = require("./config/loadEnv");
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

// procloadEnv();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// connectDB();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
