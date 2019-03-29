var cube = document.getElementById('cube');
var WindowOffset;
$( window ).scroll(function() {
	WindowOffset = window.pageYOffset;
	//$(cube).text(WindowOffset);
	$(cube).offset({top:WindowOffset+100});	
	if(WindowOffset>=300 && WindowOffset<405)
	{
		$(cube).offset({top:WindowOffset+100,left:Math.sin(WindowOffset/100)*100+300});	
	}
	if(WindowOffset>=700 && WindowOffset<805)
	{
		$(cube).offset({top:WindowOffset+100,left:Math.sin(WindowOffset/100)*100+300});	
	}
});