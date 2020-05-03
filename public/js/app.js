const $video = document.querySelector("#video");
const videoTemplate = document.querySelector("#video-template").innerHTML;

fetch("/ip").then((response) => {
  response.text().then((url) => {
    const html = Mustache.render(videoTemplate, { url });
    $video.insertAdjacentHTML("beforebegin", html);
  });
});
