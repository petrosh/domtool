Element.prototype.acc = function (ele, inner, attributes) {
	var out = false;
	if (ele.constructor === String) {
		var element = document.createElement(ele);
		if (inner !== '') {
			element.innerHTML = inner;
		}
		if (attributes && attributes.constructor === Object) {
			for (var key in attributes) {
				if (attributes.hasOwnProperty(key)) {
					element.setAttribute(key, attributes[key]);
				}
			}
		}
		out = this.appendChild(element);
	};
	return out;
};

function appendScript(t) {
	var source = (typeof t === 'string') ? t : 'loader.js';
	if (source.indexOf('?') < 0) source += '?';
	document.getElementById('scripts').acc('script', '', {'src': source + '&' + new Date().getTime()});
}

if (window.addEventListener)
	window.addEventListener("load", appendScript, false);
else if (window.attachEvent)
	window.attachEvent("onload", appendScript);
else window.onload = appendScript;
