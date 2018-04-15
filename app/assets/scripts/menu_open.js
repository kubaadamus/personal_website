var menu_open_button = document.getElementById('menu_open_button');
var menu = document.getElementById('menu');

menu_open_button.addEventListener('click',function(){
	$(menu).slideToggle();
},false);



$( window ).resize(function() {

	if($( window ).width()>1000)
	{
	$(menu).slideDown();	
	}
  

});




var wyswietlfilm = document.getElementById('wyswietlfilm');
var film = document.getElementById('film');

wyswietlfilm.addEventListener('click',function(){
	$(film).slideToggle();
},false);