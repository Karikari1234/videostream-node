const express = require("express");
const fs = require("fs");
const path = require("path");
const video = "../video/sample.mp4";

const app = express();

const videoPath = path.join(__dirname, video);
const publicDir = path.join(__dirname, "../public");
const port = process.env.PORT || 4000;

app.use(express.static(publicDir));
app.get("/video", (req, res) => {
  const stat = fs.stat(videoPath, (err, stat) => {
    if (err) {
      res.status(404).send("probs");
    }
    res.send(stat);
  });
});
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
