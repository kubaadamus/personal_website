window.addEventListener('click',function(e){

	var target_class = $(e.target).attr('class');

	if(target_class == 'pokaz_wszystkie')
	{
	cel = $(e.target).next().slideToggle();
	}

},false);
