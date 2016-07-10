
var scriptUrl = "async.js";

function init() {
	var script = document.createElement("script");
	script.src = scriptUrl;
	document.body.appendChild(script);
}

// Check for browser support of event handling capability
if (window.addEventListener)
	window.addEventListener("load", init, false);
else if (window.attachEvent)
	window.attachEvent("onload", init);
else window.onload = init;
