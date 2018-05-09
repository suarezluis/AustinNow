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

// Event listener for About
$(".about").on("click", function() {
  widget(about);
});

//Ebay affiliate link
//https://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338307235&mpre=https%3A%2F%2Fwww.ebay.com%2F
