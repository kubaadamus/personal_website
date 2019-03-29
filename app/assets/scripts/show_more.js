window.addEventListener('click',function(e){
	var target_class = $(e.target).attr('class');
	if(target_class == 'pokaz_wszystkie')
	{
	cel = $(e.target).next().slideToggle(function()
		{
			$(e.target).attr('value',-$(e.target).attr('value'));
			//alert($(e.target).attr('value'));
			if($(e.target).attr('value')==1)
			$(e.target).html(".");
			if($(e.target).attr('value')==-1)
			$(e.target).html("...");
		});
	
	}
},false);