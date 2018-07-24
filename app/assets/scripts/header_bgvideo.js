var bgvid = document.getElementById('backwideo');
var width = $(window).width();

if(width>600)
	{
		$(bgvid).html("<source id=\"bgvid2\" src=\"video/intro.webm\" type=\"video/mp4\">");
	}


$( window ).resize(function() {
width = $(window).width();
  if(width>600)
	{
		$(bgvid).html("<source id=\"bgvid2\" src=\"video/intro.webm\" type=\"video/mp4\">");
	}
});