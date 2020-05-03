const VideoStream = require("videostream");

const exampleFile = {
  createReadStream(opts) {
    const { start, end } = opts;
    // Return a readable stream that provides the bytes
    // between offsets "start" and "end" inclusive
  },
};

const video = document.createElement("video");
const videostream = new VideoStream(exampleFile, video);

video.addEventListener("error", () => {
  // listen for errors on the video/audio element directly
  const errorCode = elem.error;
  const detailedError = videostream.detailedError;
  // videostream.detailedError will often have a more detailed error message
});
