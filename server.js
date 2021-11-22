const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// app.get('/', function (req, res) {
// 	res.sendFile(__dirname + '/index.html');
// });
