<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta charset="utf-8"> 
<link rel="stylesheet" href="styles.css">
	<title></title>
</head>
<body>
<!===================================== H E A D E R ===========================================>
<div class="header">
<video autoplay muted loop class="bgvid" id="bgvid" poster="assets/images/black.jpg">

</video>
	<div class="logo"></div>
	<div class="motto">
		<h1 class="imie">REJESTRACJA</h1>
		<h3 class="slogan">Full stack web developer / Grafik 3D / Programista</h3>
	</div>
</div>
<!===================================== O M N I E ===========================================>
<div class="omnie omnie--padding"  id="omnie">

		<form action="rejestracja_confirmed.php" method="post">
			<label>E-learning login: </label><input type="text" name="login" />
			<label>Hasło: </label><input type="text" name="password" />
			<button type="submit">Zaloguj</button>
		</form>
</div>
<!===============K O N I E C   O M N I E ====================>
<!===================================== F O O T E R ===========================================>
<div class="stopka"  id="stopka">
	<div class="motto">
		Stwórzmy razem coś niezwykłego!
	</div>
	<div class="dane_kontaktowe">
		<p>Jakub Adamus</p>
		<p>e-mail:<wbr> jakubadamus1991<wbr>@gmail.com</p>
		<p>gg: 1767602</p>
	</div>
	<div class="kontakty">
		<button class="kontakt" style="background-image: url(assets/images/global/gg.png)" onclick="window.location.href='gg:1767602'"></button>
		<button class="kontakt" style="background-image: url(assets/images/global/fb.png)" onclick="window.location.href='https://www.facebook.com/jakub.adamus.52'"></button>
		<button class="kontakt" style="background-image: url(assets/images/global/gmail.png)" onclick="window.location.href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jakubadamus1991@gmail.com'"></button>
	</div>


</div>



<!======================================== S K R Y P T Y ======================================>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="assets/scripts/menu_open.js"></script>
<script type="text/javascript" src="assets/scripts/content_open.js"></script>
<script type="text/javascript" src="assets/scripts/scroll.js"></script>
<script type="text/javascript" src="assets/scripts/show_more.js"></script>
<script type="text/javascript" src="assets/scripts/header_bgvideo.js"></script>
<script type="text/javascript" src="assets/scripts/slides.js"></script>
</body>
</html>