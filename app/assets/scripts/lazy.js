
        function HideAll(){

          $(".war_image").hide();
          $(".por_image").hide();
          if($( window ).width()>1000)
          {
            $(".por_image").parent().parent().css('width',0+'px');
            $(".zyc_image").css('width',0+'px');
            $(".logo").hide().fadeIn(1000);
            $(".slogan").hide().fadeIn(1000);
            $(".lang_container").hide().delay( 800 ).slideDown(1000);
          }


        };
        HideAll();
    
    var war_bool=false;
    var por_bool=false;
    var zyc_bool=false;
    var kon_bool=false;
    var warsztat = $("#warsztat").position();
    var portfolio = $("#portfolio").position();
    var zycie = $("#zycie").position();
    var kontakt = $("#kontakt").position();


    $(window).scroll(LazyLoad);

    LazyLoad();




    function LazyLoad() {
      var scrollBottom =$(window).scrollTop() + $(window).height();
      
            if(scrollBottom>warsztat.top+250 && !war_bool)
            {
              console.log("loading: warsztat")
              war_bool=true;
              $(".war_image").each(function(obraz){
                $(this).attr('src', $(this).attr('src-data'));
                $(this).delay(50 * obraz).slideDown(500);
              });
            }
            if(scrollBottom>portfolio.top+300 && !por_bool)
            {
              console.log("loading: portfolio")
              por_bool=true;
              $(".por_image").each(function(obraz){$(this).delay(50 * obraz).attr('src', $(this).delay(50 * obraz).attr('src-data'));$(this).delay(50 * obraz).fadeIn(1000);$(this).parent().parent().removeAttr("style");});
              
    
            }
            if(scrollBottom>zycie.top+200 && !zyc_bool)
            {
              console.log("loading: zycie")
              zyc_bool=true;
              $(".zyc_image").each(function(obraz){$(this).attr('src', $(this).attr('src-data'));$(this).removeAttr("style");});
            }
            if(scrollBottom>kontakt.top && !kon_bool)
            {
              console.log("loading: kontakt")
              kon_bool=true;
            }
    
    
    
    };


