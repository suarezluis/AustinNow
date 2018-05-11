var weatherAPI;
var movieAPI;
var weatherIcon;
var weatherDescription;
var temp;
var humidity;
var pressure;
var windSpeed;
var windDirection;
var visibility;
var maxTemp;
var minTemp;
var sunrise;
var sunset;

var weatherAPIKey = "bbcffd22c05dae8cf9f7512e606b6653";
// Here we are building the URL we need to query the database
var weatherQueryURL =
  "https://api.openweathermap.org/data/2.5/weather?" +
  "id=4671654&units=imperial&appid=" +
  weatherAPIKey;
// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: weatherQueryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {
    weatherAPI = response;
    weatherIcon =
      "<img class='weatherIcon' src='assets/images/weather/" +
      weatherAPI.weather[0].icon +
      ".svg'" +
      " alt=''>";
    weatherDescription =
      weatherAPI.weather[0].description.charAt(0).toUpperCase() +
      weatherAPI.weather[0].description.substr(1);
    temp = weatherAPI.main.temp;
    humidity = weatherAPI.main.humidity;
    pressure = weatherAPI.main.pressure;
    windSpeed = weatherAPI.wind.speed;
    windDirection = weatherAPI.wind.deg;
    visibility = weatherAPI.visibility;
    maxTemp = weatherAPI.main.temp_max;
    minTemp = weatherAPI.main.temp_min;
    sunrise = new Date(weatherAPI.sys.sunrise * 1000).toLocaleTimeString();
    sunset = new Date(weatherAPI.sys.sunset * 1000).toLocaleTimeString();

    $("#AE").html(
      "<div class='weatherInfo'>" +
        weatherIcon +
        "<p class='temperature'>" +
        Math.round(temp) +
        "°F" +
        "</p></div>"
    );
  });

var newsAPI;

var newsAPIKey = "b0d34a658ba640128f563b584c31ac9a";

var newsQueryURL =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + newsAPIKey;

$.ajax({
  url: newsQueryURL,
  method: "GET"
}).then(function(response) {
  newsAPI = response;

  var i = 0;
  $("#FC").html(
    "<p>" +
      "<a href='" +
      newsAPI.articles[i].url +
      "' id='newsArticles'>" +
      newsAPI.articles[i].title +
      "</a>" +
      "</p>"
  );

  setInterval(function() {
    i++;
    if (i === newsAPI.articles.length) {
      i = 0;
    }
    $("#FC").html(
      "<p>" +
        "<a href='" +
        newsAPI.articles[i].url +
        "' id='newsArticles'>" +
        newsAPI.articles[i].title +
        "</a>" +
        "</p>"
    );
    //console.log(newsAPI.articles[i].title);
  }, 5000);
});

//// movies
var movieQueryURL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=ef73b07d7e7668c1b934d3be4be1864f&language=en-US&page=1";
$.ajax({
  url: movieQueryURL,
  method: "GET"
}).then(function(response) {
  movieAPI = response;
});
