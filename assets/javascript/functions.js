// Function to display time, argument required is a string with handler in CSS
// format, ie. "#ID", ".Class"

function displayTime(string) {
  $(string).attr("style", "font-size:16.6vh;");
  var timer = setInterval(function() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var amPm = "";
    if (eval(hours) > 12) {
      hours = hours - 12;
      amPm = "PM";
    } else {
      amPm = "AM";
    }
    if (eval(minutes) < 10) {
      minutes = "0" + minutes;
    }
    if (eval(seconds) < 10) {
      seconds = "0" + seconds;
    }

    $(string).html("<span class='time'>" +
      hours +
        ":" +
        minutes +
        "</span><span class='seconds'>" +
        seconds +
        "</span><span class='amPm'>" +
        "" +
        amPm +"</span>"
    );
  }, 1000);
}

// Function to display date, argument required is a string with handler in CSS
// format, ie. "#ID", ".Class"

function displayDate(string) {
  $(string).attr("style", "line-height:8.3vh;  font-size:8.3vh;");
  var timer = setInterval(function() {
    var pp = new Date();

    var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri"];
    var monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    var dayWeek = dayNames[pp.getDay()];
    var dayMonth = pp.getDate();
    var month = monthNames[pp.getMonth()];
    var year = pp.getFullYear();

    $(string).html(
      "<span class='date'>" + dayWeek + ", " + month + ", " + dayMonth + ", " + year + "</span>"
    );
  }, 1000);
}

// Function to display icon, arguments required are; icon name and a string with handler in CSS
// format, ie. "#ID", ".Class"
function populateIcon(iconName, grid) {
  $(grid).html(iconName);
}

function widget(content) {
  $(document).off();
  $(".widgetContent").html(
    content
  );
  $("#CC").css({ transition: "all 1s", opacity: "0" });
  $("#DC").css({ transition: "all 1s", opacity: "0" });
  setTimeout(function() {
    $("#widget").css("height", "90vh");
  }, 600);
}
