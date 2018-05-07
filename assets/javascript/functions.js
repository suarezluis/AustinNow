// Function to display time, argument required is a string with handler in CSS
// format, ie. "#ID", ".Class"

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
    $(string).html(hours + ":" + minutes + "" +"<span style='font-size:5.5vh'>" + seconds +"</span>"+ "" + amPm);
  }, 1000);
}

// Function to display time, argument required is a string with handler in CSS
// format, ie. "#ID", ".Class"

function displayDate(string) {
  var timer = setInterval(function() {
    var pp = new Date();

    var dayNames = [
      "Sun",
      "Mon",
      "Tues",
      "Wed",
      "Thu",
      "Fri"
    ];
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
    var year = pp.getFullYear()
    
    $(string).attr("style", "line-height:8.3vh;  font-size:8.3vh;");
    $(string).html("<br>" + dayWeek + ", " + month + ", " + dayMonth + ", " + year);
  }, 1000);
}
