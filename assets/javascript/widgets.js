var googleSearch =
  '<form><input type="text" name="" id="googleInput" placeholder="Google Search"><input id="googleButton"type="submit" value="Search"></form>';
var gMaps =
  '<form><input type="text" name="" id="googleInput" placeholder="Google Maps Search"><input id="googleButton"type="submit" value="Search"></form>';
var about =
  "<h5>About</h5><p class='about'>First and foremost, thanks for visiting Austin Now! This is our first project for the Coding Bootcamp at The University of Texas in Austin. Austin Now! is and always will be 100% FREE. If you want to help out with it's developement and hosting costs, go ahead and treat yourself and buy something from Amazon using our link or shortcut. We will get a small kick back.</p><h5>Terms and Conditions:</h5><p>By accesing Austin-Now.com you accept and authorize anonymous collection of data that will help us further develop this website.</p><h5>Programmed by:</h5><p>Luis Suarez, Raven Wills, Patrick Thacker and Alan Davila</p>";
var help =
  "<h5>Help</h5><h5>Shortcuts:</h5>[A]mazon, [F]acebook, [G]oogle, [I]nstagram, [L]inkedIn, G[m]ail, [N]etflix, [R]eddit, [S]potify, [T]witter, [W]ikipedia, [Y]outube";
var weatherDetails = [
  "<div class='weatherWidget'><table><tr><td>Description:</td><td>",
  "</td></tr><tr><td>Temperature:</td><td>",
  "</td></tr><tr><td>Humidity:</td><td>",
  "</td></tr><tr><td>Pressure:</td><td>",
  "</td></tr><tr><td>Wind Speed:</td><td>",
  "</td></tr><tr><td>Wind Direction: </td><td>",
  "</td></tr><tr><td>Visibility</td><td>",
  "</td></tr><tr><td>Max. Temp.</td><td>",
  "</td></tr><tr><td>Min. Temp.</td><td>",
  "</td></tr><tr><td>Sunrise:</td><td>",
  "</td></tr><tr><td>Sunset:</td><td>",
  "</td></tr></table><br><div class='right'>Provided by <a href='https://openweathermap.org/city/4671654'> OpenWeatherMap.org</a></div>"
];
var traffic =
  '<h4 class="lava">The Floor is Lava! do not step on the red</h4><div id="map"></div><script>function initMap(){var location = { lat: 30.2672, lng: -97.7431 };var map = new google.maps.Map(document.getElementById("map"), {zoom: 12,center: location  });var marker = new google.maps.Marker({position: location,map: map});var trafficLayer = new google.maps.TrafficLayer();trafficLayer.setMap(map);}</script><div class="right"><br>Provided by <a href="https://www.google.com/maps/place/Austin,+TX/@30.2922585,-97.758717,11.25z/data=!4m5!3m4!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608!5m1!1e1">Google Maps</a></div><script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXl_jWqJWFM15QWRsYl1_h8acPM4HkKkQ&callback=initMap"></script>';
var movies =
  "<table class=movieTable><tr><td class=movie1><td class=movie2><td class=movie3><tr><td class=movie4><td class=movie5><td class=movie6><tr><td class=movie7><td class=movie8><td class=movie9></table><div class='right'>Provided by <a href='https://www.imdb.com/movies-in-theaters/'>IMDb</a></div>";
var eventBrite = "<div class='eventBrite'></div>"