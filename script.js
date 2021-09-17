const  DOM_ELEMENTS = {
      video: document.getElementById("video-player"),
      videoSection: document.getElementById("video-section"),
      bottomSection: document.getElementById("bottom-section"),
      mapSection: document.getElementById("map-section"),
      goButton: document.getElementById("go-button"),
      profiteButton: document.getElementById("profite-button"),
      arrow: document.getElementById("arrow"),
      address: document.getElementById("address")
}

// Initial Application State
DOM_ELEMENTS.mapSection.style.display = "none";
DOM_ELEMENTS.goButton.style.display = "none";

// Function for map initialization
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
            .then( data => DOM_ELEMENTS.address.innerHTML = "Leclerc, " + data.results[0].formatted_address )
      }
      getAddress(location)
}

// All DOM interactions either on video's end or button's click.
const pubInteractions = () => {

      DOM_ELEMENTS.mapSection.style.removeProperty("display");
      DOM_ELEMENTS.goButton.style.removeProperty("display");
      DOM_ELEMENTS.arrow.style.display = "none";

      DOM_ELEMENTS.videoSection.className = "video-disaparition";
      DOM_ELEMENTS.goButton.classList.add("button-up");
      DOM_ELEMENTS.bottomSection.className = "bottom-up";
      
      DOM_ELEMENTS.video.pause();
      DOM_ELEMENTS.video.currentTime = 0;
}

// EventListener for video's end and button's click.
DOM_ELEMENTS.video.addEventListener("ended", pubInteractions)
DOM_ELEMENTS.profiteButton.addEventListener("click", pubInteractions)

