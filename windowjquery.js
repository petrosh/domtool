if (!window.jQuery) {
	window.location.href="fallback.html";
} else {
	$( document ).ready(function() {
	  $( "p" ).text( "The DOM is now loaded and can be manipulated." );
		$( "body" ).append($( "p" ).text( "Loaded" ));
	});
}
