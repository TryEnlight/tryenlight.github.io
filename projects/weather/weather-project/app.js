function getLocation() {

  var location = document.getElementById("location");

  navigator.geolocation.getCurrentPosition(success, error);

  if(!navigator.geolocation){
      location.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

function getWeatherID();

var request = new XMLHttpRequest();
request.open('GET', "https://www.metaweather.com/api/location/search/?lattlong=", true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
  } else {
    alert("error");
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

getWeatherID()



