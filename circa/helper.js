Element.prototype.acc = function (ele, inner, attributes) {
	var out = false;
	if (ele.constructor === String) {
		var element = document.createElement(ele);
		if (inner !== '') {
			element.innerHTML = inner;
		}
		if (attributes.constructor === Object) {
			for (var key in attributes) {
				if (attributes.hasOwnProperty(key)) {
					element.setAttribute(key, attributes.key);
				}
			}
		}
		out = this.appendChild(element);
	};
	return out;
};

function appendScript(t) {
	var script = document.createElement("script");
	script.src = (typeof t === 'string') ? t : 'loader.js';
	document.body.appendChild(script);
}

if (window.addEventListener)
	window.addEventListener("load", appendScript, false);
else if (window.attachEvent)
	window.attachEvent("onload", appendScript);
else window.onload = appendScript;
