var compass = $("#compass");
var logo=$("#logo");
var box=$("#compass");
var angle=0;
setInterval(CompassCheck, 1000);
function CompassCheck(){
  
    box.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
    box.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});

}

$(document).mousemove(function( event ) {
  var logocenter=[logo.offset().left+logo.width()/2, logo.offset().top+logo.height()/2];
  angle = Math.atan2((event.pageX - logocenter[0]),-(event.pageY - logocenter[1]))*(180/Math.PI)+45;      
});

