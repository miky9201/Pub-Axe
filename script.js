const video = document.getElementById("video-player");
const videoSection= document.getElementById("video-section");
const bottomSection= document.getElementById("bottom-section");

video.addEventListener("ended", () => {
      videoSection.className = 'video-disaparition';
      bottomSection.className = 'bottom-up';
      // videoSection.hidden = true;
})