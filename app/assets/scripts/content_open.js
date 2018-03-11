var aktywny_obraz = 0;
var ilosc_obrazow = 0;
var main_images;
var active_photo = document.getElementById("active_photo");
var dane = document.getElementById("dane");
var name_kafelka;

//Do kazdego kafelka doładuje jego id takie samo jak jego name
var kafelki_wszystkie = document.getElementsByClassName('kafelek');

//alert(kafelki_wszystkie.length);



$( document ).ready(function() {
   			$(kafelki_wszystkie).each(function(){
				this.setAttribute('id',$(this).attr('name'));
			});
});






window.addEventListener('click',function(e){
	//Jesli uzytkownik kliknie na kafelek//
	var cel = $(e.target);
	var target_class = cel.attr('class');

	if(target_class == 'kafelek')
	{
	name_kafelka = "#"+cel.attr('name');

		aktywny_obraz = 0;
		$(dane).css({'display':'block'}); // Pokaz w ogole zakładke z danymi
		// Kod, który wykona się po kliknięciu na kafelek w dziedzinie porfolio //
		var sciezka = 'assets/xmldata/'+cel.attr('name') + '.xml';
		//alert(sciezka);
		xhr.open('GET', sciezka,true);
		xhr.send(null);

	}


	//zapamietaj id kafelka zeby do niego wrócic

	//Jesli kliknie przycisk wroc to przewin do poprzedniego kafelka
	if(target_class == 'wroc')
	{
		$("html, body").animate({scrollTop: $(name_kafelka).offset().top -250}, 500);
	}


},false)

var xhr = new XMLHttpRequest();

xhr.onload = function(){
	var response = xhr.responseXML;


// N A Z W A 
		var nazwa_xml = response.getElementsByTagName("nazwa")[0].childNodes[0].nodeValue;
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
				photo.setAttribute('draggable',"false");
				photo.setAttribute('oncontextmenu',"return false;");
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



	//Przesun widok na dane
	$("html, body").animate({scrollTop: $('#dane').offset().top }, 500);

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