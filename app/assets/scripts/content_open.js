var aktywny_obraz = 0;
var ilosc_obrazow = 0;
var main_images;
var active_photo = document.getElementById("active_photo");

window.addEventListener('click',function(e){
	//Jesli uzytkownik kliknie na kafelek//
	var cel = $(e.target);
	var target_class = cel.attr('class');
	if(target_class == 'kafelek')
	{
	
		// Kod, który wykona się po kliknięciu na kafelek w dziedzinie porfolio //
		var sciezka = 'assets/xmldata/'+cel.attr('name') + '.xml';
		//alert(sciezka);
		xhr.open('GET', sciezka,true);
		xhr.send(null);

	}

},false);


var xhr = new XMLHttpRequest();

xhr.onload = function(){
	var response = xhr.responseXML;


// N A Z W A 
		var nazwa_xml = response.getElementsByTagName('nazwa')[0].childNodes[0].nodeValue;
		var nazwa_docelowa = document.getElementById("nazwa");

		nazwa_docelowa.childNodes[0].nodeValue = nazwa_xml;

//O B R A Z Y


		//Uzyskiwanie i przeróbka kontentu XML
		var main = document.getElementById("main");
		//Usuwamy wszystko ze srodka przed zaladowaniem nowego contentu
			while (main.firstChild) {
	    		main.removeChild(main.firstChild);
			}
		var obrazy = response.getElementsByTagName('obraz');
		ilosc_obrazow = $(obrazy).length;
		for (var i = 0; i < ilosc_obrazow; i++){ 
				//alert(obrazy[i].childNodes[0].nodeValue);
				var photo = document.createElement('img');
				photo.setAttribute("class","gallery_image");
				photo.setAttribute("style","display: none;")
				photo.setAttribute("src",obrazy[i].childNodes[0].nodeValue);
				photo.setAttribute('numerek',i);
				main.appendChild(photo);
		}
		
// O P I S Y


		var opis = document.getElementById("opis");
		//Usuwamy wszystko ze srodka przed zaladowaniem nowego contentu
			while (opis.firstChild) {
	    		opis.removeChild(opis.firstChild);
			}
		//Ładujemy nowy content
		var paragrafy = response.getElementsByTagName('paragraf');	
		var ilosc_paragrafow = $(paragrafy).length;
		for (var i = 0; i < ilosc_paragrafow; i++){ 
				//alert(paragrafy[i].childNodes[0].nodeValue);

				var paragraf = document.createElement('p');
				paragraf.setAttribute("class", "paragraf");
				var tekst_paragrafu = document.createTextNode(paragrafy[i].childNodes[0].nodeValue);
				paragraf.appendChild(tekst_paragrafu);
				opis.appendChild(paragraf);
		}

//Wez wszystkie dzieci image z maina i przydziel pierwszemu z nich display block;


main_images = main.childNodes;

$(main_images[aktywny_obraz]).css({
'display':'block'
});

active_photo.childNodes[0].nodeValue = (aktywny_obraz+1) + " / "+ilosc_obrazow;
};


window.addEventListener('click',function(e){

	if($(e.target).attr('class') == 'main' || $(e.target).attr('class') == 'gallery_image' || $(e.target).attr('class') == 'next' || $(e.target).attr('class') == 'prev')
	{
			

			if($(e.target).attr('class') == 'next')
			{
			aktywny_obraz++;				
			}
			else if($(e.target).attr('class') == 'prev')
			{
			aktywny_obraz--;	
			}
			else
			{
				aktywny_obraz++;
			}

			if(aktywny_obraz>ilosc_obrazow-1)
			{
				aktywny_obraz=0;
			}
			if(aktywny_obraz<0)
			{
				aktywny_obraz=ilosc_obrazow-1;
			}
			//alert(aktywny_obraz);



			//wez wszystkim obrazom dojeb css display none
			$(main_images).each(function(){
				$(this).css({'display':'none'});

				if($(this).attr('numerek')==aktywny_obraz)
				{
				$(this).css({'display':'block'});	
				}
			});

				
				active_photo.childNodes[0].nodeValue = (aktywny_obraz+1) + " / "+ilosc_obrazow;
	}

},false);