fetch("http://localhost:4000/video").then((response) => {
  response.json().then((stat) => console.log(stat));
});

const exampleFile = {
  createReadStream(stat) {
    const { start, end } = stat;
    // Return a readable stream that provides the bytes
    // between offsets "start" and "end" inclusive
  },
};

const video = document.createElement("video");

video.addEventListener("error", () => {
  // listen for errors on the video/audio element directly
  const errorCode = elem.error;
  const detailedError = videostream.detailedError;
  // videostream.detailedError will often have a more detailed error message
});
