var menu_open_button = document.getElementById('menu_open_button');
var menu = document.getElementById('menu');

menu_open_button.addEventListener('click',function(){
	$(menu).slideToggle();
},false);


