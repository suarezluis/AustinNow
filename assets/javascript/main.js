populateIcon(searchIcon,"#AA")
populateIcon(gMapsIcon,"#BA")
populateIcon(trafficIcon,"#CA")
populateIcon(eventbriteIcon,"#DA")
populateIcon(moviesIcon,"#EA")
populateIcon(amazonIcon,"#BE")


displayDate("#CC");
displayTime("#DC");

populateIcon(aboutIcon,"#FE")

$(".closeMe").on("click",function(){
    setTimeout(function(){
        $("#CC").css({"transition":"all 1s","opacity":"1"})
    $("#DC").css({"transition":"all 1s","opacity":"1"})
    },1000)
    
    $("#widget").css("height","5px")
})

$(".about").on("click",function(){
    
    $("#CC").css({"transition":"all 1s","opacity":"0"})
    $("#DC").css({"transition":"all 1s","opacity":"0"})
    setTimeout(function(){$("#widget").css("height","90vh")},600)
    
})