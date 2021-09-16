const video = document.getElementById("video-player");
const videoContainer = document.getElementById("video-container");

video.addEventListener("ended", () => videoContainer.hidden = true)