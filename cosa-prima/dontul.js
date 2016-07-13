// set first script to load
var loaderScript = 'loader.js';

// Define DonTul
Element.prototype.dt = function (ele, inner, attributes) {
	var out = false;
	if (ele.constructor === String) {
		if (ele.substr(0, 4) === 'http' || ele.substr(ele.length - 3, 3) === '.js') {
			// if (ele.indexOf('?') < 0) ele += '?';
			out = this.dt('script', '', {'src': ele + '?&' + new Date().getTime()});
		} else {
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
		}
	}
	return out;
};


// initialization: append loader script
function inizia() {
	document.getElementById('scripts').dt(loaderScript);
}

function appendScript(t) {
	var source = (typeof t === 'string') ? t : 'loader.js';
	if (source.indexOf('?') < 0) source += '?';
	document.getElementById('scripts').dt('script', '', {'src': source + '&' + new Date().getTime()});
}

// wait for onload event call initialiation
if (window.addEventListener)
	window.addEventListener("load", appendScript, false);
else if (window.attachEvent)
	window.attachEvent("onload", appendScript);
else window.onload = appendScript;
