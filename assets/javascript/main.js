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

//Ebay affiliate link
//https://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338307235&mpre=https%3A%2F%2Fwww.ebay.com%2F