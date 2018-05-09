var weatherAPI;

var weatherAPIKey = "bbcffd22c05dae8cf9f7512e606b6653";
// Here we are building the URL we need to query the database
var weatherQueryURL =
  "https://api.openweathermap.org/data/2.5/weather?" +
  "q=Austin,us&units=imperial&appid=" +
  weatherAPIKey;
// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: weatherQueryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {
    weatherAPI = response;

    $("#AE").html(
      "<div class='weatherInfo'><img class='weatherIcon' src='assets/images/weather/" +
        weatherAPI.weather[0].icon +
        ".svg" +
        "'" +
        "alt=''><br><span>" +
        Math.round(weatherAPI.main.temp) +
        "°F" +
        "</span></div>"
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
    console.log(newsAPI.articles[i].title);
  }, 5000);
});
