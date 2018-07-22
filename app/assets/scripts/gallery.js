var photo_number = 0;
var position=0;
var miniatura_width = parseInt($(".miniatura").css("width"));
$("#row").css('transform','translateX('+(position+window.innerWidth/2-miniatura_width/2)+'px)');
$(function () {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $(".row").on("swipeleft", swipeleftHandler);
    $(".row").on("swiperight", swiperightHandler);
});
// Callback function references the event target and adds the 'swipe' class to it
function swipeleftHandler(event) {

    if(photo_number<$(".miniatura").length-1)
    {
        photo_number += 1;
        position-=parseInt($(".miniatura").css("width"))+20;
    }

    console.log(position);
    $("#row").css('transform','translateX('+(position+window.innerWidth/2-miniatura_width/2)+'px)');
    console.log("SWIPE LEFT!");
}

function swiperightHandler(event) {
    console.log("SWIPE! RIGHT");
    if (photo_number > 0) {
        photo_number -= 1;
        position+=parseInt($(".miniatura").css("width"))+20;
    }
    console.log(position);
    $("#row").css('transform','translateX('+(position+window.innerWidth/2-miniatura_width/2)+'px)');
    
}

$(function() {      
    $(".background--latte").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        console.log("You swiped " + direction );  
        if(direction=="left")
        {
            swipeleftHandler();
        }
        if(direction=="right")
        {
            swiperightHandler();
        }
      },
       threshold:0

    });



  });