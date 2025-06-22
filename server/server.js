// server.js
const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/endpoint", (req, res) => {
  const { feedback } = req.body;

  fs.appendFile("feedback.txt", feedback + "\n", (err) => {
    if (err) return res.status(500).send("Failed to save");
    res.send("Saved successfully");
  });
});

app.listen(3001, () => console.log("Server running on port 3001"));
