const video = document.getElementById("video-player");
const videoSection= document.getElementById("video-section");
const bottomSection= document.getElementById("bottom-section");

video.addEventListener("click", () => {
      videoSection.className = 'video-disaparition';
      video.pause();
      video.currentTime = 0;
      bottomSection.className = 'bottom-up';
      
})