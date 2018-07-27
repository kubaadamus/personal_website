$(".por_image").click(function (e) {



    $(".page").queue(function () {
            $(this).attr("style", "transform: ");
            $(this).dequeue();

        })
        .delay(700)
        .queue(function () {
            $(this).attr("style", "transform:  translateX("+-$(window).width()+"px);");
            $(this).dequeue();
        })
        .delay(500)
        .queue(function () {
            $(".subpage").slideDown(500);
            $(this).dequeue();
        });



})

$(".subpage").click(function () {


    $(".page")
    .queue(function () {
        $(".subpage").slideUp(500);
        $(this).dequeue();
    })
    .delay(300)
    .queue(function () {
        $(this).attr("style", "transform:  ");
        $(this).dequeue();

    })
    .delay(700)
    .queue(function () {
        $(this).attr("style", "transform: scale(1.0, 1.0)");
        $(this).dequeue();
    });



});