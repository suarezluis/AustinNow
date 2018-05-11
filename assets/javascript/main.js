var config = {
  apiKey: "AIzaSyCMZUFGTi5fg3qB0x-uDAPvruRRbMyixG0",
  authDomain: "ut-codingcamp-45ac0.firebaseapp.com",
  databaseURL: "https://ut-codingcamp-45ac0.firebaseio.com",
  projectId: "ut-codingcamp-45ac0",
  storageBucket: "ut-codingcamp-45ac0.appspot.com",
  messagingSenderId: "955060422974"
};
firebase.initializeApp(config);
var database = firebase.database();
var austinNowRef = database.ref("/AustinNow");
var totalLoads = 0;
var clicks = {
  search: 0,
  maps: 0,
  traffic: 0,
  eventbrite: 0,
  movies: 0,
  weather: 0,
  amazon: 0,
  spotify: 0,
  help: 0,
  about: 0
};
var searches = {};

// If database structure doesn't exist then create it
austinNowRef.once("value", function(snap) {
  if (snap.hasChild("Loads") == false) {
    austinNowRef.child("Loads").set({ total: 0 });
  }
  if (snap.hasChild("Clicks") == false) {
    austinNowRef.child("Clicks").set({
      search: 0,
      maps: 0,
      traffic: 0,
      eventbrite: 0,
      movies: 0,
      weather: 0,
      amazon: 0,
      spotify: 0,
      help: 0,
      about: 0
    });
  }
  if (snap.hasChild("Searches") == false) {
    austinNowRef.child("Searches").set({ "Austin Now!": 0 });
  }
});

// Listen for changes in the database
austinNowRef.on(
  "value",
  function(snapshot) {
    totalLoads = snapshot.val().Loads.total;
    clicks = snapshot.val().Clicks;
    searches = snapshot.val().Searches;
  },
  function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  }
);

populateIcon(searchIcon, "#AA");
populateIcon(gMapsIcon, "#BA");
populateIcon(trafficIcon, "#CA");
populateIcon(eventbriteIcon, "#DA");
populateIcon(moviesIcon, "#EA");
populateIcon(amazonIcon, "#BE");
populateIcon(spotifyIcon, "#CE");

displayDate("#CC");
displayTime("#DC");

populateIcon(aboutIcon, "#FE");
populateIcon(helpIcon, "#EE");
shortcutOn();

// Event listener for closing the widget
$(".closeMe").on("click", function() {
  setTimeout(function() {
    $("#CC").css({ transition: "all 1s", opacity: "1" });
    $("#DC").css({ transition: "all 1s", opacity: "1" });
    $(".widgetContent").html("");
  }, 1000);

  $("#widget").css("height", "5px");
  shortcutOn();
});

// Event listener for Search
$(".search").on("click", function() {
  widget(googleSearch);
  document.getElementById("googleInput").focus();
  // listen for click on google form
  $("#googleButton").on("click", function(e) {
    e.preventDefault();
    var query = "https://www.google.com/search?q=" + $("#googleInput").val();

    //Update searches
    austinNowRef.child("Searches").once("value", function(snap) {
      //if search doesnt exist, create it
      if (snap.hasChild($("#googleInput").val()) == false) {
        // Set search in database
        austinNowRef.child("Searches/" + $("#googleInput").val()).set(0);
      }
      //if search exist update number
      else {
        update = snap.val()[$("#googleInput").val()];
        update++;
        console.log(update);
        austinNowRef.child("Searches/" + $("#googleInput").val()).set(update);
      }
    });

    // update number of searches performed
    uptadeClick("search");
    // redirect to goolge
    window.location = href = query;
  });
});

// Event listener for mapsSearch
$(".gMaps").on("click", function() {
  widget(gMaps);
  document.getElementById("googleInput").focus();
  $("#googleButton").on("click", function(e) {
    e.preventDefault();
    var query =
      "https://www.google.com/maps/search/" +
      $("#googleInput").val() +
      "/@30.2879221,-97.7698523,11z";
    uptadeClick("maps");
    window.location = href = query;
  });
});

// Event listener for weather
$("#AE").on("click", function() {
  var string =
    weatherDetails[0] +
    weatherDescription +
    weatherDetails[1] +
    temp +
    " °F" +
    weatherDetails[2] +
    humidity +
    " %" +
    weatherDetails[3] +
    pressure +
    " hpa" +
    weatherDetails[4] +
    windSpeed +
    " mph" +
    weatherDetails[5] +
    windDirection +
    " °" +
    weatherDetails[6] +
    Math.round(visibility / 1000 / 1.6) +
    " Miles" +
    weatherDetails[7] +
    maxTemp +
    " °F" +
    weatherDetails[8] +
    minTemp +
    " °F" +
    weatherDetails[9] +
    sunrise +
    weatherDetails[10] +
    sunset +
    weatherDetails[11];

  widget(string);
  uptadeClick("weather");
});

// Event listener for Help
$(".help").on("click", function() {
  widget(help);
  uptadeClick("help");
});
// Event listener for About
$(".about").on("click", function() {
  widget(about);
  uptadeClick("about");
});

//Event Listener for Amazon
$(".amazon").on("click", function() {
  uptadeClick("amazon");
  window.location = href = "https://amzn.to/2rvgZOq";
});

//Event Listener for Spotify
$(".spotify").on("click", function() {
  uptadeClick("spotify");
  window.location = href = "https://www.spotify.com";
});
//Event Listener for Traffic
$(".traffic").on("click", function() {
  widget(traffic);
  uptadeClick("traffic");
});
//Event Listener for Eventbrite
$(".eventbrite").on("click", function() {
  widget(about);
  uptadeClick("eventbrite");
});
//Event Listener for Movies
$(".movies").on("click", function() {
  widget(movies);
  for (i = 0; i < 6; i++) {
    $(".movie" + (i+1)).append("<img src='https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+movieAPI.results[i].poster_path+"'>");
    $(".movie" + (i+1)).append("<br><p class='movieTitle'>" + movieAPI.results[i].title + "</p>");
  }
  uptadeClick("movies");
});

//Ebay affiliate link
//https://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338307235&mpre=https%3A%2F%2Fwww.ebay.com%2F

//Function to update clicks in database
function uptadeClick(click) {
  clicks[click]++;
  eval("austinNowRef.child('Clicks').update({" + click + ":clicks[click]})");
}

// Update loads in server
setTimeout(function() {
  totalLoads++;
  austinNowRef.child("Loads").update({ total: totalLoads });
}, 5000);


function readSearches(){
 var result;
    austinNowRef.child("Searches").once("value", function(snap) {
        result = snap.val()
    })
return result
}