const express = require("express");
const fs = require("fs");
const path = require("path");
const video = "../video/sample.mp4";

const app = express();

const videoPath = path.join(__dirname, video);
const publicDir = path.join(__dirname, "../public");
const port = process.env.PORT || 4000;

app.get("/video", (req, res) => {
  try {
    const pathvid = path.join(__dirname, "../video/sample.mp4");
    const stat = fs.stat(pathvid, (err, stat) => {
      if (err) {
        res.status(404).send("404");
      }
      const fileSize = stat.size;
      const range = req.headers.range;
      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = end - start + 1;
        const file = fs.createReadStream(pathvid, { start, end });
        const head = {
          "Content-Range": `bytes ${start}-${end}/${fileSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": chunksize,
          "Content-Type": "video/mp4",
        };
        res.writeHead(206, head);
        file.pipe(res);
      } else {
        const head = {
          "Content-Length": fileSize,
          "Content-Type": "video/mp4",
        };
        res.writeHead(200, head);
        fs.createReadStream(pathvid).pipe(res);
      }
    });
  } catch (e) {
    res.status(404).send("probs");
  }
});

app.use(express.static(publicDir));
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
