function displayTime(string) {
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
    $(string).attr("style", "font-size:16.6vh;");
    $(string).text(hours + ":" + minutes + ":" + seconds + " " + amPm);
  }, 1000);
}
