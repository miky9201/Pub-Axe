const video = document.getElementById("video-player");
const videoSection = document.getElementById("video-section");
const bottomSection = document.getElementById("bottom-section");
const mapSection = document.getElementById("map-section");
const goButton = document.getElementById("go-button");
const arrow = document.getElementById("arrow");

mapSection.style.display = "none";
goButton.style.display = "none";


video.addEventListener("ended", () => {
      mapSection.style.removeProperty("display");
      goButton.style.removeProperty("display");
      arrow.style.display = "none";
      goButton.classList.add("button-up");
      bottomSection.className = "bottom-up";
      videoSection.className = "video-disaparition";
      video.pause();
      video.currentTime = 0;
})