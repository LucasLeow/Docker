const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())

app.get("/", (req, res) => {
    res.json([
        {
            "id": "1...",
            "title": "Book 1"
        },
        {
            "id": "2",
            "title": "Book 2"
        }
    ])
});

app.listen(4000, () => {
    console.log("Listening to requests on port 4000");
});