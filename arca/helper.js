function appendScript(t) {
	var script = document.createElement("script");
	script.src = (typeof t === 'string') ? t : 'loader.js';
	document.head.appendChild(script);
}


if (window.addEventListener)
	window.addEventListener("load", appendScript, false);
else if (window.attachEvent)
	window.attachEvent("onload", appendScript);
else window.onload = appendScript;
