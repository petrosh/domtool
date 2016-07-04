if (!window.jQuery) {
	window.location.href="fallback.html";
}

$( document ).ready(function() {
  $( "p" ).text( "The DOM is now loaded and can be manipulated." );
	$( "body" ).append($( "p" ).text( "Loaded" ));
});
