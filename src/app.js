const express = require("express");
const fs = require("fs");
const path = require("path");
const video = "../video/sample.mp4";

const app = express();

const videoPath = path.join(__dirname, video);
const publicDir = path.join(__dirname, "../public");
const port = process.env.PORT || 4000;

app.use(express.static(publicDir));
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
