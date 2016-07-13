if (!window.jQuery) {
	window.location.href="fallback.html";
} else {
	$( document ).ready(function() {
	  $( "p" ).text( "The DOM is now loaded and can be manipulated." );
		$( "body" ).append($( "p" ).text( "Loaded" ));
		$.getJSON('https://api.github.com/repos/petrosh/domtool/git/refs/heads/gh-pages', function(data) {
			$('body').append($('p').text('ennamo'));
			console.log(data);
		});
	});
}
