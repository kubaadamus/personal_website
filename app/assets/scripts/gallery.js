var photo_number = 0;
var position = 0;
var bodyScroll = true;
var miniatura_width = parseInt($(".miniatura").css("width"));
$("#row").css('transform', 'translateX(' + (position + window.innerWidth / 2 - miniatura_width / 2) + 'px)');
$(function () {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $(".row").on("swipeleft", swipeleftHandler);
    $(".row").on("swiperight", swiperightHandler);
});
// Callback function references the event target and adds the 'swipe' class to it
function swipeleftHandler() {

    if (photo_number < $(".miniatura").length - 1) {
        photo_number += 1;
        position -= parseInt($(".miniatura").css("width")) + 24;
    }
    $("#row").css('transform', 'translateX(' + (position + window.innerWidth / 2 - miniatura_width / 2) + 'px)');
}

function swiperightHandler() {
    if (photo_number > 0) {
        photo_number -= 1;
        position += parseInt($(".miniatura").css("width")) + 24;
    }
    $("#row").css('transform', 'translateX(' + (position + window.innerWidth / 2 - miniatura_width / 2) + 'px)');
}

var funkcja = $(function () {
    $(".background--latte").swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            console.log("You swiped " + direction);
            if (direction == "left") {
                swipeleftHandler();
            }
            if (direction == "right") {
                swiperightHandler();
            }

        },
        threshold: 0
    });



});

$(window).resize(function () {
    photo_number = 0;
    position = 0;
    miniatura_width = parseInt($(".miniatura").css("width"));
    $("#row").css('transform', 'translateX(' + (position + window.innerWidth / 2 - miniatura_width / 2) + 'px)');

});


/*
$(".galeria").mouseenter(function () {
    console.log("galeria IN");
    $("body").attr("style", "overflow-y:hidden");
    bodyScroll = false;

});

$(".galeria").mouseleave(function () {
    console.log("galeria OUT");
    $("body").attr("style", "overflow:auto");
    bodyScroll = true;
});
*/
window.addEventListener("wheel", myScript);
function myScript(event) {

    /*
    if (!bodyScroll) {
        if (event.deltaY <= 0) {
            //console.log('Scroll up');
            swiperightHandler();
        } else {
            //console.log('Scroll down');
            swipeleftHandler();
        }
    };
console.log($(window).scrollTop() + $(window).height());
console.log($(document).height());

*/

    if($(window).scrollTop() + $(window).height() > $(document).height()-12) {
        if (event.deltaY <= 0) {
            console.log('Scroll up');
            swiperightHandler();
        } else {
            console.log('Scroll down');
            swipeleftHandler();
        }

        if(photo_number>0)
        {
            $("body").attr("style", "overflow-y:hidden");
        }
        if(photo_number==0)
        {
            $("body").attr("style", "overflow:auto"); 
        }
    }
    else{
        $("body").attr("style", "overflow:auto");
    }
}



$(".miniatura").click(function(e){
console.log($(e.target).attr("nr"));
var nr = parseInt($(e.target).attr("nr"));

while(nr>photo_number)
{
    swipeleftHandler();
}
while(nr<photo_number)
{
    swiperightHandler();
}
});