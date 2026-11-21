const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", function(req, res) {
    res.send("E-Commerce Backend is Running!");
});

app.listen(3000, function() {
    console.log("Server running on port 3000");
});