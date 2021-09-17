const video = document.getElementById("video-player");
const videoSection = document.getElementById("video-section");
const bottomSection = document.getElementById("bottom-section");
const mapSection = document.getElementById("map-section");
const goButton = document.getElementById("go-button");
const profiteButton = document.getElementById("profite-button");
const arrow = document.getElementById("arrow");
const address = document.getElementById("address");

// Initial Application State
mapSection.style.display = "none";
goButton.style.display = "none";

function initMap()  {

      // The fake location (Nimes)
      const location = { lat: 43.83741, lng: 4.357535 };

      // The map, centered at the location point
      const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: location,
      });

      // The marker, positioned at the location point
      const marker = new google.maps.Marker({
            position: location,
            map: map,
      });

      // Fetch request getting the address from latitudes et longitudes
      const getAddress = async (location) => {
            await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyD1NSn_5WguHll7dJ3wA7qO-BVs4RDyRsU`)
            .then( res => res.json())
            .then( data => address.innerHTML = data.results[0].formatted_address )
      }
      getAddress(location)
}

// All DOM interactions either on video's end or button's click.
const pubInteractions = () => {
      mapSection.style.removeProperty("display");
      goButton.style.removeProperty("display");
      arrow.style.display = "none";
      goButton.classList.add("button-up");
      bottomSection.className = "bottom-up";
      videoSection.className = "video-disaparition";
      video.pause();
      video.currentTime = 0;
}

// EventListener when video is ended and the button clicked.
video.addEventListener("ended", pubInteractions)
profiteButton.addEventListener("click", pubInteractions)

