setInterval(function(){loop()}, 20000);
function loop(){
    var scrollBottom =$(window).scrollTop() + $(window).height();
    if(scrollBottom<$(window).height()+300)
    {
        $(".zapraszam").slideDown(2000).delay(5000).slideUp(2000);
    }
}