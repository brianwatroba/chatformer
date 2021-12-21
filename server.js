const express = require("express");
const config = require("config");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

// Connections on server start
const app = express();
const PORT = config.get("PORT");
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
connectDB();

// Init middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// API routes
app.use("/api/twitch/users", require("./routes/api/twitch/users"));
app.use("/api/twitch/streams", require("./routes/api/twitch/streams"));
app.use("/api/twitch/auth", require("./routes/api/twitch/auth"));

// Serve react build on all unnamed routes
if (
    process.env.NODE_ENV === "staging" ||
    process.env.NODE_ENV === "production"
) {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
