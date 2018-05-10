populateIcon(searchIcon, "#AA");
populateIcon(gMapsIcon, "#BA");
populateIcon(trafficIcon, "#CA");
populateIcon(eventbriteIcon, "#DA");
populateIcon(moviesIcon, "#EA");
populateIcon(amazonIcon, "#BE");

displayDate("#CC");
displayTime("#DC");

populateIcon(aboutIcon, "#FE");
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
  $("#googleButton").on("click", function(e) {
    e.preventDefault();
    var query = "https://www.google.com/search?q=" + $("#googleInput").val()
    window.location = href = query;
     
  });
});


// Event listener for mapsSearch
$(".gMaps").on("click", function() {
    widget(gMaps);
    $("#googleButton").on("click", function(e) {
      e.preventDefault();
      var query = "https://www.google.com/maps/search/" + $("#googleInput").val() + "/@30.2879221,-97.7698523,11z"
      window.location = href = query;
       
    });
  });

// Event listener for weather
$("#AE").on("click", function() {
    var string = weatherDetails[0] + weatherDescription +
                 weatherDetails[1] + temp + " °F" +
                 weatherDetails[2] + humidity + " %"+
                 weatherDetails[3] + pressure + " hpa"+
                 weatherDetails[4] + windSpeed + " mph" +
                 weatherDetails[5] + windDirection + " °" +
                 weatherDetails[6] + Math.round(visibility /1000 /1.6) + " Miles" +
                 weatherDetails[7] + maxTemp + " °F" + 
                 weatherDetails[8] + minTemp + " °F" +
                 weatherDetails[9] + sunrise+
                 weatherDetails[10] + sunset +
                 weatherDetails[11]           
        
        
    widget(string);
  });


// Event listener for About
$(".about").on("click", function() {
  widget(about);
});

//Event Listener for Amazon
$(".amazon").on("click", function(){
    window.location = href = "https://amzn.to/2rvgZOq";
})


//Ebay affiliate link
//https://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338307235&mpre=https%3A%2F%2Fwww.ebay.com%2F
