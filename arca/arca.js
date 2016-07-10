function init(t) {
	var script = document.createElement("script");
	script.src = (typeof t === 'string') ? t : 'async.js';
	document.head.appendChild(script);
}

// Check for browser support of event handling capability
if (window.addEventListener)
	window.addEventListener("load", init, false);
else if (window.attachEvent)
	window.attachEvent("onload", init);
else window.onload = init;
