function appendScript(t) {
	var script = document.createElement("script");
	script.src = (t.contructor === String) ? t : 'loader.js';
	document.body.appendChild(script);
}


if (window.addEventListener)
	window.addEventListener("load", appendScript, false);
else if (window.attachEvent)
	window.attachEvent("onload", appendScript);
else window.onload = appendScript;
